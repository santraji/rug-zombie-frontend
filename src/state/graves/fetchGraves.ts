import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import drFrankenstein from 'config/abi/drFrankenstein.json'
import multicall from 'utils/multicall'
import { getDrFrankensteinAddress, getMasterChefAddress } from 'utils/addressHelpers'
import {  GraveConfig } from 'config/constants/types'
import { getId } from '../../utils'
import { getBep20Contract, getDrFrankensteinContract } from '../../utils/contractHelpers'

const fetchGraves = async (gravesToFetch: GraveConfig[]) => {
  const data = await Promise.all(
    gravesToFetch.map(async (graveConfig) => {
      const calls = [
        {
          address: getDrFrankensteinAddress(),
          name: 'poolInfo',
          params: [getId(graveConfig.pid)],
        },
        {
          address: getDrFrankensteinAddress(),
          name: 'unlockFeeInBnb',
          params: [getId(graveConfig.pid)],
        },
        {
          address: getDrFrankensteinAddress(),
          name: 'totalAllocPoint',
        },
      ]

      const [
        info,
        unlockFee,
        totalAllocPoint
      ] = await multicall(erc20, calls)

      const allocPoint = new BigNumber(info.allocPoint._hex)
      const weight = allocPoint.div(new BigNumber(totalAllocPoint))
      const tokenAmount = new BigNumber((await getBep20Contract(info.lpToken).methods.balanceOf(getDrFrankensteinAddress()))._hex)

      return {
        ...graveConfig,
        poolInfo: {
          unlockFee: new BigNumber(unlockFee._hex),
          minimumStake: new BigNumber(info.minimumStake._hex),
          withdrawCooldown: new BigNumber(info.minimumStakingTime._hex),
          nftRevivalTime: new BigNumber(info.nftRevivalTime._hex),
          lpToken: info.lpToken,
          tokenAmount,
          allocPoint,
          weight,
        }
      }
    }),
  )
  return data
}

export default fetchGraves