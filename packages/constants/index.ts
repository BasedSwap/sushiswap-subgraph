import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_TWO = BigInt.fromI32(2)

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

export const FACTORY_ADDRESS = Address.fromString('0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_CHEF_ADDRESS = Address.fromString('0xc2edad668740f1aa35e4d8f227fb8e17dca888cd')

export const SUSHI_BAR_ADDRESS = Address.fromString('0x8798249c2e607446efb7ad49ec89dd1865ff4272')

export const SUSHI_MAKER_ADDRESS = Address.fromString('0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50')

export const SUSHI_TOKEN_ADDRESS = Address.fromString('0x6b3595068778dd592e39a122f4f5a5cf09c90fe2')

export const SUSHI_USDT_PAIR_ADDRESS = Address.fromString('0x680a025da7b1be2c204d7745e809919bce074026')

export const XSUSHI_USDC_PAIR_ADDRESS = Address.fromString('0xd597924b16cc1904d808285bc9044fd51ceeead7')

export const XSUSHI_WETH_PAIR_ADDRESS = Address.fromString('0x36e2fcccc59e5747ff63a03ea2e5c0c2c14911e7')

export const SUSHI_DISTRIBUTOR_ADDRESS = Address.fromString('0xcbe6b83e77cdc011cc18f6f0df8444e5783ed982')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0x397ff1542f962076d0bfe58ea045ffa2d347aca0'

export const DAI_WETH_PAIR = '0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f'

export const USDT_WETH_PAIR = '0x06da0fd433c1a5d7a4faa01111c044910a184553'

export const SUSHI_USDT_PAIR = '0x680a025da7b1be2c204d7745e809919bce074026'

export const WHITELIST: string[] = [
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
  '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
  '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
  '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
  '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
  '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
  '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
  '0x514910771af9ca656af840dff83e8264ecf986ca', //LINK
  '0x960b236a07cf122663c4303350609a66a7b288c0', //ANT
  '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', //SNX
  '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', //YFI
  '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', // yCurv
  '0x92e187a03b6cd19cb6af293ba17f2745fd2357d5', // DUCK
  '0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a', // BAC
  '0x2ba592f78db6436527729929aaf6c908497cb200', // CREAM
  '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0', // FXS
  '0xa1faa113cbe53436df28ff0aee54275c13b40975', // ALPHA
  '0xdb0f18081b505a7de20b18ac41856bcb4ba86a1a', // pWING
  '0x04fa0d235c4abf4bcf4787af4cf447de572ef828', // UMA
  '0x3155ba85d5f96b2d030a4966af206230e46849cb', // RUNE
  '0x87d73e916d7057945c9bcd8cdd94e42a6f47f776', // NFTX
  '0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d', // stETH
  '0xad32A8e6220741182940c5aBF610bDE99E737b2D' // DOUGH
]

export const BLACKLIST_EXCHANGE_VOLUME: string[] = [
  '0x9ea3b5b4ec044b70375236a281986106457b20ef' // DELTA
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0')

export const WETH_ADDRESS = Address.fromString('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')

export const SUSHISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x06da0fd433c1a5d7a4faa01111c044910a184553')

export const USDT_ADDRESS = Address.fromString('0xdac17f958d2ee523a2206206994597c13d831ec7')

export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(10750000)

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f')

export const UNISWAP_SUSHI_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(10750005)

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852')

export const UNISWAP_SUSHI_ETH_PAIR_ADDRESS = Address.fromString('0xce84867c3c02b05dc570d0135103d3fb9cc19433')

export const UNISWAP_SUSHI_USDT_PAIR_ADDRESS = Address.fromString('0xe3ffab89e53422f468be955e7011932efe80aa26')


// Bentobox constants
export const BENTOBOX_ADDRESS = Address.fromString('0xf5bce5077908a1b7370b9ae04adc565ebd643966')

export const KASHI_PAIR_MEDIUM_RISK_MASTER_ADDRESS = Address.fromString('0x2cba6ab6574646badc84f0544d05059e57a5dc42')

export const BENTOBOX_DEPOSIT = 'deposit'

export const BENTOBOX_TRANSFER = 'transfer'

export const BENTOBOX_WITHDRAW = 'withdraw'

export const KASHI_PAIR_MEDIUM_RISK_TYPE = 'medium'

export const PAIR_ADD_COLLATERAL = 'addCollateral'

export const PAIR_REMOVE_COLLATERAL = 'removeCollateral'

export const PAIR_ADD_ASSET = 'addAsset'

export const PAIR_REMOVE_ASSET = 'removeAsset'

export const PAIR_BORROW = 'borrow'

export const PAIR_REPAY = 'repay'