import { BIG_ZERO } from '../utils/bigNumber'
import { Nft, NftUserInfo } from './types'
import artists from '../config/constants/artists'

const DEFAULT_USER_INFO: NftUserInfo = {
  ownedIds: [],
}

const nfts: Nft[] = [
  {
    id: 0,
    name: 'yApe Common',
    symbol: 'yAPE-COMMON',
    description: 'Good things never last Mr. Denham.',
    address: {
      56: '0xa8a30a507c44Cb7Bdcb7d6f1F8e6A7F373A9C9AA',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/yApeCommon.jpeg',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 1,
    name: 'yPanda Common',
    symbol: 'yPANDA-COMMON',
    description: 'Legend tells of a legendary warrior whose kung fu skills were the stuff of legend.',
    address: {
      56: '0x864661Cd1FDedf6Bc249beB8B76CeaD629B48122',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/yPandaCommon.jpeg',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 2,
    name: 'DragonFarm Finance Common',
    symbol: 'DRAGON-COMMON',
    description: 'My armor is like tenfold shields, my teeth are swords, my claws spears, the shock of my tail a thunderbolt, my wings a hurricane, and my breath death!',
    address: {
      56: '0x983608174E9ae08D938433119aD5C4b1f8B29A03',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/CommonDragonFarmFinance.webm',
    type: 'video',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 3,
    name: 'Fairmoon Common',
    symbol: 'FAIRMOON-COMMON',
    description: 'It\'s fairly common.',
    address: {
      56: '0x47367847B67b5D4fe905d18D2Cc4e0D149008C41',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/FairmoonCommon.webm',
    type: 'video',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 4,
    name: 'Zombie on the Moon',
    symbol: 'Z-MOON',
    description: 'There is no fair side of the moon really.',
    address: {
      56: '0x0b0dEa27fD22009A8ee2d0222025Eb9a81a9B26E',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/FairmoonUncommon.webm',
    type: 'video',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 5,
    name: 'Patient Zero Alpha',
    symbol: 'PATIENT-ZERO',
    description: 'Not much is known about the origin of the first humans gone zombie. We do know this one loved tacos.',
    address: {
      56: '0xFEf72C8d941F4F2D308E2Ae892AEDc084b280bB0',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: '/images/rugZombie/Patient Zero.jpg',
    type: 'image',
    rarity: 'Biblical',
    userInfo: { ...DEFAULT_USER_INFO }
  },
  {
    id: 6,
    name: 'Basic Zombie',
    symbol: 'BASIC-ZMBE',
    description: 'This grave\'s multiplier is suspiciously low, what could frankenstein be planning.',
    address: {
      56: '0x6209E17d98ba2089571476940751802AAc4249e8',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/BasicZombie.gif',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 7,
    name: 'Viking Brains',
    symbol: 'BRAINS',
    description: 'Fear not death, for the hour of your doom is set and none may escape it.',
    address: {
      56: '0x4659c3ad5d487c8de34744120559d48dcf288a22',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/VikingBrains.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 8,
    name: 'ZombieSlayer',
    symbol: 'ZSC',
    description: 'We wrestle not with flesh and blood, but with principalities.',
    address: {
      56: '0xbd7f3130cB219e47584591051b5806556006B0A9',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/ZombieSlayer.gif',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 9,
    name: 'Zombie100',
    symbol: 'Z100',
    description: 'My name is legion, for we are many.',
    address: {
      56: '0xeC1CC772F2ad80D8341351a532303d986B41D5e4',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Zombie100.gif',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 10,
    name: 'Raremoon',
    symbol: 'RAREMOON',
    description: 'Fair moon risin\' in a sky of black dust.',
    address: {
      56: '0x6195E792F558A2BEA35f54bA8FF9897445867951',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Raremoon.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 11,
    name: 'My name is MERL',
    symbol: 'MERL-RARE',
    description: 'The man who believes that the secrets of the world are forever hidden lives in mystery and fear.',
    address: {
      56: '0x52ECFee39530A35696F6633Cba0e957657a66357',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/My Name Is MERL.png',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 12,
    name: 'Chompers',
    symbol: 'CHOMP',
    description: 'Live every week like it\'s shark week.',
    address: {
      56: '0x37E178be665fE4bFD9dAd0F537B9f3E60a05Ff9A',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Chompers.webm',
    type: 'video',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 13,
    name: 'DeadDollar',
    symbol: '$DEAD',
    description: 'https://en.wikipedia.org/wiki/Hyperinflation',
    address: {
      56: '0x09853d458bfcD6690eB626302ca2A79ae98933F8',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/DeadDollar.png',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 14,
    name: 'The Rad Chad',
    symbol: 'RAD-C',
    description: 'The radiation gave him lzr eyes.',
    address: {
      56: '0xd39c4280b080d33352d79c08d763570d7d7e62bb',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/The Rad Chad.png',
    type: 'image',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 15,
    name: 'Zombiden',
    symbol: 'Z-BIDEN',
    description: 'C\'mon man.',
    address: {
      56: '0x1050DC60784117fcc4F995Ca6980a3beE2765564',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/RUGBIDEN.webm',
    type: 'video',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 16,
    name: 'Zomburger',
    symbol: 'Z-BURGER',
    description: 'Would you like fries with that?',
    address: {
      56: '0xD0AA831AcC0EE1d3b7aAA209Ab44eA680074C2Ed',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Zomburger.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 17,
    name: 'Silverback',
    symbol: 'SILVERBACK',
    description: 'One Family, One Troop.',
    address: {
      56: '0xa8740132360f5c1C487259066ddb5C5c4292def2',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Silverback.webm',
    type: 'video',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 18,
    name: 'Patient Zero Beta',
    symbol: 'PATIENT-ZERO',
    description: 'He loves cake.',
    address: {
      56: '0xc4Ba6d56C162efBFA881DAd69AAcC9263A352C8A',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/PatientZeroBeta.png',
    type: 'image',
    rarity: 'Biblical',
    userInfo: { ...DEFAULT_USER_INFO }
  },
  {
    id: 19,
    name: 'Zombie Horde',
    symbol: 'HORDE',
    description: 'In your head X2.',
    address: {
      56: '0xABef28a6686A75c24c79fD95d31E7bD9828Ab1B8',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Zombie Multiplier.png',
    type: 'image',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 20,
    name: 'Block Party',
    symbol: 'PARTY',
    description: 'Some of us are like a shovel brigade that follow a parade down Main Street cleaning up.',
    address: {
      56: '0xce428a085298e89034195c776cc8a5904093a532',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Main%20Street.png',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 21,
    name: 'Electric Zombie',
    symbol: 'ELECTRIC',
    description: 'There was no help, no help from you. Sound of the drums, beating in my heart, the thunder of guns tore me apart.',
    address: {
      56: '0x61ea827873Ee1fAcD5c6Cc4D86c5477192AD7E34',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Electric Zombie.png',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 22,
    name: 'Young Fool',
    symbol: 'FOOL',
    description: 'How dangerous emperors are when they go mad.',
    address: {
      56: '0x84890D06cD06778CfE7206A8c72b51551Fe26DF3',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Young%20Fool.jpeg',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 23,
    name: 'Rugian Shield',
    symbol: 'SHIELD',
    description: '"The twilight there holds a serene beauty... you have seen it yourself as sun sets on this world. Bathed in the light, all the people were pure and gentle."',
    address: {
      56: '0xeD84e84F95170bcdDCE92aD44e1E93ACe511Bb1d',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Rugian%20Shield.png',
    type: 'image',
    rarity: 'Uncommon',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 24,
    name: 'GlitchLink',
    symbol: 'gLINK',
    description: '"I am error.',
    address: {
      56: '0xd10A49fb53cFCc3b9C2c27aB314BCC8dB2A144A3',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/GlitchLink.webm',
    type: 'video',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 25,
    name: 'Leonhard Euler\'s Day Off',
    symbol: 'EULER',
    description: 'Now I will have less distraction.',
    address: {
      56: '0x58D739aF3aBBb8d34A2D9068dCC60a95D172f80c',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/Leonhard Euler\'s Day Off.gif',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 26,
    name: 'The Inevitable Ape',
    symbol: 'INEVITABLE',
    description: 'Welcome to the Jungle.',
    address: {
      56: '0x1443f5Cb7F3128a9c09289dD48B41d200e0BE590',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/ApeSwap-min.png',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 27,
    name: 'Nightmare Fuel Karen',
    symbol: 'KAREN',
    description: 'May I speak to your manager?',
    address: {
      56: '0xe10F32986c97F9c74bD604E081Db114Ca17D3B5a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmaTXD2A7dfTaMhGzDU9ubFwVS79GF9EPMRFkGc6G9XEHf',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 28,
    name: 'Slow Zombie',
    symbol: 'SLOW',
    description: 'Too late bruh',
    address: {
      56: '0xe72CfFDEFfd85f2a2b83B58fDBF3cCAba578599a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmXcs1Bpp3d16pF6HEKGmo4WTj8WU7YyaGi9b6F71StvDF',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 29,
    name: 'Zombie Multiplexer',
    symbol: 'MULTIPLEXER',
    description: 'If three or more values occur at the maximum frequency, the dataset is multi-modal.',
    address: {
      56: '0x72762C0D0812F157b59CecF0eeC6b1B15d175b97',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/Qmdi7wTt8iF62ay8foD7nqP5F7qSB9YGaYgY3NL1URA5Cw',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 30,
    name: 'Zombie Wallet',
    symbol: 'ZWALLET',
    description: 'Genuine Human Leather!',
    address: {
      56: '0xcf9ce4bb89a7848015b1b281427694d417a0ce2a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmcvagniUfh9k8Ks42pJPnDicHBGSkFgLB6dcUbJKnTB4p',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 31,
    name: 'Meowser',
    symbol: 'MEOWSER',
    description: 'Here kitty kitty',
    address: {
      56: '0xB48b4aAC280C2a89b58272f942c46C66C1b42e20',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmeRBJF6shwm23FrvCQ3SU69wWFcN3kJXNqseTxCyvi3LN',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 32,
    name: 'The Killmonger',
    symbol: 'KILLMONGER',
    description: 'Bury me in the ocean, with my ancestors that jumped from the ships, because they knew death was better than bondage',
    address: {
      56: '0x33566cd376B81975f23c74Fe0105cf198342Ac74',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'images/rugZombie/The Killmonger min.jpeg',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 33,
    name: 'Crypto Mutant Zombie',
    symbol: 'MUTANT',
    description: 'This ape is never bored.',
    address: {
      56: '0xe6BCC4522FbBC2B6B064b3614D3a8d578aB077A4',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Zombi_Monkey-min.jpg',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 34,
    name: 'Zombabe',
    symbol: 'BABE',
    description: 'Her brains bring all the zomboys to the yard.',
    address: {
      56: '0x0D8A324D7B8F3e5adDcD50eD18E3e756dcdF756A',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmVGjzRvf2WD5JKjh5wNVjVtimPv9R2mzeuYUNin2cFsc7',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 35,
    name: 'Freaky Zolom',
    symbol: 'ZOLOM',
    description: 'Hail Hydra.',
    address: {
      56: '0x65c8747e82F3CC648045f06a85Dc239D09d8286A',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmafkchvcXFDdMkdJzQFjWaXcZQyGfe4F8p35X4TQVVGH3',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 36,
    name: 'The Eye of the Bingus',
    symbol: 'EYE-OF-BINGUS',
    description: 'Oh my gosh, that guy has a mullet!',
    address: {
      56: '0x0e57816deb67dA534e7C2D29cb3A0c02594a195b',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmYvobX57rSxJE9LC2tgQhWKKirZQRmnfTHFy12tR8SQba',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 37,
    name: 'ChompersV2',
    symbol: 'CHOMP-V2',
    description: 'Sharks. I never saw that coming.',
    address: {
      56: '0x0Fa3AbBD69226164b9960ed0AfE4B7224ACc0eCc',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmSwn2nVZ7onSrh59LTtiC4o44Qbzzdk5eQFJkPB6wxbWw',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 38,
    name: 'Zombie Trader Common',
    symbol: 'TRADER-COMMON',
    description: 'Price is what you pay. Value is what you get. Risk comes from not knowing what you\'re doing.',
    address: {
      56: '0x9E926ba265AaE57Cf50193f6984E7e44A2763E4a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmPiLdr6ZRieLFLYNRA2ch1PUr9aDqw7QAm832VZ9Texyj',
    type: 'image',
    rarity: 'Common',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 39,
    name: 'Season 1',
    symbol: 'WHALE',
    description: 'I try all things, I achieve what I can.',
    address: {
      56: '0xADEbC6fe47Baf315bfbD66F8Ce515fBc78Bf42EB',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmQnj8i4k2kwoboNN2TMoJ5ugH1Mxav4r8zAsz6PmXvP7P',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 40,
    name: 'Trust Us',
    symbol: 'TRUST',
    description: 'Or don\'t, we will just zombie on.',
    address: {
      56: '0xaCA0503F854fF89a7FFA75CE139fdaEa3DccD21B',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Trust%20Us.jpeg',
    type: 'image',
    rarity: 'Biblical',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 41,
    name: 'The Chosen',
    symbol: 'CHOSEN',
    description: 'Did you hear the bells ringing?',
    address: {
      56: '0x9609Ee9f17987587083279e60ca5e86c30FF28A2',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/Qmet1ztQoPXekbc8AK3VkxJK62CAQJC35weUKM6iz4Mn8s',
    type: 'image',
    rarity: 'Rare',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 42,
    name: 'Fluffy',
    symbol: 'FLUFFY',
    description: 'Did you hear the bells ringing?',
    address: {
      56: '0xf5971902a4625236C1f268C6d077aFAD340359D9',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/French%20Connection%20NFT.jpeg',
    type: 'image',
    rarity: 'Legendary',
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 43,
    name: 'Catacombs',
    symbol: 'CATACOMBS',
    description: 'They lurk down there.',
    address: {
      56: '0xbAcDdD813c4C786eFB43d899C9b5d9E7F43e5A20',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295'
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmbCfEW45ZFBXs1NgRHYyMXd2u9bUAeL8poHybZ1kP5oLY',
    type: 'image',
    rarity: 'Mythic',
    userInfo: { ...DEFAULT_USER_INFO }
  },
  {
    id: 44,
    name: 'Zomberina',
    symbol: 'ZOMBERINA',
    description: 'Arabesque!',
    address: {
      56: '0x4CD0F32bf663EF1d8C016E393243dA753Db19CF3',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmTKuQUr7t4rTmFCSm2kFD8azSK24ysUDWDKBDtHXnkhmT',
    type: 'image',
    rarity: 'Common',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 45,
    name: 'Zomboni',
    symbol: 'ZOMBONI',
    description: 'Ice, Ice, Zombie',
    address: {
      56: '0xb256Bf0E888c34FE67a4169f0A5f80AC9F9e2f6D',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',

    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmcDG9auXhMRJdF9eaSMhrmcWeJe6kHrDAbYvDrVTYPaub',
    type: 'image',
    rarity: 'Uncommon',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 46,
    name: 'I am Drol',
    symbol: 'DROL',
    description: 'There can only be one.',
    address: {
      56: '0x431b4049B278edaE5856DE6BDA7898b8267c8253',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmW5KmNsBPHWfc8UBEMWvtQvVwM33UsBuiqqynjKftWSnX',
    type: 'image',
    rarity: 'Rare',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 47,
    name: 'Ocean',
    symbol: 'OCEAN',
    description: 'It\'s the shark\'s house.',
    address: {
      56: '0x8c1F3947881662C7F1753A3432891227ffab92B1',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'https://storage.googleapis.com/rug-zombie/Ocean-Compresed.webm',
    type: 'video',
    rarity: 'Legendary',
    artist: artists.ZomBaes,
    userInfo: { ...DEFAULT_USER_INFO },
  },
  {
    id: 48,
    name: 'Shiny Inevitable Ape',
    symbol: 'INEVITABLE',
    description: 'Welcome to the Jungle.',
    address: {
      56: '0xE501dB597207F41599b05e8fD45e229686683D5a',
      97: '0x2d8b022125f4afbf9594a4dff269eb44e15ae295',
    },
    totalSupply: BIG_ZERO,
    path: 'https://ipfs.io/ipfs/QmTUNZZSZZSbVtfvDkHFXPr9fuHdXYLnQeTJMTiRMJ7epq',
    type: 'video',
    rarity: 'Legendary',
    artist: artists.jussjoshinduh,
    userInfo: { ...DEFAULT_USER_INFO },
  },
]

export default nfts