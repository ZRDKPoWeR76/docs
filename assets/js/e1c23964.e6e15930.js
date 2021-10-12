(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[7465],{5072:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={},o=void 0,d={unversionedId:"reference/core/interfaces/pool/IUniswapV3PoolEvents",id:"version-V3/reference/core/interfaces/pool/IUniswapV3PoolEvents",isDocsHomePage:!1,title:"IUniswapV3PoolEvents",description:"Contains all events emitted by the pool",source:"@site/versioned_docs/version-V3/reference/core/interfaces/pool/IUniswapV3PoolEvents.md",sourceDirName:"reference/core/interfaces/pool",slug:"/reference/core/interfaces/pool/IUniswapV3PoolEvents",permalink:"/protocol/reference/core/interfaces/pool/IUniswapV3PoolEvents",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/core/interfaces/pool/IUniswapV3PoolEvents.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"IUniswapV3PoolDerivedState",permalink:"/protocol/reference/core/interfaces/pool/IUniswapV3PoolDerivedState"},next:{title:"IUniswapV3PoolImmutables",permalink:"/protocol/reference/core/interfaces/pool/IUniswapV3PoolImmutables"}},p=[{value:"Events",id:"events",children:[{value:"Initialize",id:"initialize",children:[]},{value:"Mint",id:"mint",children:[]},{value:"Collect",id:"collect",children:[]},{value:"Burn",id:"burn",children:[]},{value:"Swap",id:"swap",children:[]},{value:"Flash",id:"flash",children:[]},{value:"IncreaseObservationCardinalityNext",id:"increaseobservationcardinalitynext",children:[]},{value:"SetFeeProtocol",id:"setfeeprotocol",children:[]},{value:"CollectProtocol",id:"collectprotocol",children:[]}]}],m={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains all events emitted by the pool"),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"initialize"},"Initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Initialize(\n    uint160 sqrtPriceX96,\n    int24 tick\n  )\n")),(0,i.kt)("p",null,"Emitted exactly once by a pool when #initialize is first called on the pool"),(0,i.kt)("p",null,"Mint/Burn/Swap cannot be emitted by the pool before Initialize"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sqrtPriceX96")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The initial sqrt price of the pool, as a Q64.96")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The initial tick of the pool, i.e. log base 1.0001 of the starting price of the pool")))),(0,i.kt)("h3",{id:"mint"},"Mint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Mint(\n    address sender,\n    address owner,\n    int24 tickLower,\n    int24 tickUpper,\n    uint128 amount,\n    uint256 amount0,\n    uint256 amount1\n  )\n")),(0,i.kt)("p",null,"Emitted when liquidity is minted for a given position"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sender")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that minted the liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The owner of the position and recipient of any minted liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The lower tick of the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The upper tick of the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of liquidity minted to the position range")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"How much token0 was required for the minted liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"How much token1 was required for the minted liquidity")))),(0,i.kt)("h3",{id:"collect"},"Collect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Collect(\n    address owner,\n    address tickLower,\n    int24 tickUpper,\n    int24 amount0,\n    uint128 amount1\n  )\n")),(0,i.kt)("p",null,"Emitted when fees are collected by the owner of a position"),(0,i.kt)("p",null,"Collect events may be emitted with zero amount0 and amount1 when the caller chooses not to collect fees"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The owner of the position for which fees are collected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The lower tick of the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The upper tick of the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 fees collected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 fees collected")))),(0,i.kt)("h3",{id:"burn"},"Burn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Burn(\n    address owner,\n    int24 tickLower,\n    int24 tickUpper,\n    uint128 amount,\n    uint256 amount0,\n    uint256 amount1\n  )\n")),(0,i.kt)("p",null,"Emitted when a position's liquidity is removed"),(0,i.kt)("p",null,"Does not withdraw any fees earned by the liquidity position, which must be withdrawn via #collect"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The owner of the position for which liquidity is removed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The lower tick of the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The upper tick of the position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of liquidity to remove")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 withdrawn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 withdrawn")))),(0,i.kt)("h3",{id:"swap"},"Swap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Swap(\n    address sender,\n    address recipient,\n    int256 amount0,\n    int256 amount1,\n    uint160 sqrtPriceX96,\n    uint128 liquidity,\n    int24 tick\n  )\n")),(0,i.kt)("p",null,"Emitted by the pool for any swaps between token0 and token1"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sender")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that initiated the swap call, and that received the callback")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"recipient")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that received the output of the swap")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The delta of the token0 balance of the pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The delta of the token1 balance of the pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sqrtPriceX96")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The sqrt(price) of the pool after the swap, as a Q64.96")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The liquidity of the pool after the swap")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The log base 1.0001 of price of the pool after the swap")))),(0,i.kt)("h3",{id:"flash"},"Flash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Flash(\n    address sender,\n    address recipient,\n    uint256 amount0,\n    uint256 amount1,\n    uint256 paid0,\n    uint256 paid1\n  )\n")),(0,i.kt)("p",null,"Emitted by the pool for any flashes of token0/token1"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sender")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that initiated the swap call, and that received the callback")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"recipient")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that received the tokens from flash")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 that was flashed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 that was flashed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"paid0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 paid for the flash, which can exceed the amount0 plus the fee")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"paid1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 paid for the flash, which can exceed the amount1 plus the fee")))),(0,i.kt)("h3",{id:"increaseobservationcardinalitynext"},"IncreaseObservationCardinalityNext"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event IncreaseObservationCardinalityNext(\n    uint16 observationCardinalityNextOld,\n    uint16 observationCardinalityNextNew\n  )\n")),(0,i.kt)("p",null,"Emitted by the pool for increases to the number of observations that can be stored"),(0,i.kt)("p",null,"observationCardinalityNext is not the observation cardinality until an observation is written at the index\njust before a mint/swap/burn."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"observationCardinalityNextOld")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The previous value of the next observation cardinality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"observationCardinalityNextNew")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The updated value of the next observation cardinality")))),(0,i.kt)("h3",{id:"setfeeprotocol"},"SetFeeProtocol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event SetFeeProtocol(\n    uint8 feeProtocol0Old,\n    uint8 feeProtocol1Old,\n    uint8 feeProtocol0New,\n    uint8 feeProtocol1New\n  )\n")),(0,i.kt)("p",null,"Emitted when the protocol fee is changed by the pool"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feeProtocol0Old")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The previous value of the token0 protocol fee")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feeProtocol1Old")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The previous value of the token1 protocol fee")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feeProtocol0New")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The updated value of the token0 protocol fee")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feeProtocol1New")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The updated value of the token1 protocol fee")))),(0,i.kt)("h3",{id:"collectprotocol"},"CollectProtocol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event CollectProtocol(\n    address sender,\n    address recipient,\n    uint128 amount0,\n    uint128 amount0\n  )\n")),(0,i.kt)("p",null,"Emitted when the collected protocol fees are withdrawn by the factory owner"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sender")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that collects the protocol fees")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"recipient")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address that receives the collected protocol fees")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 protocol fees that is withdrawn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 protocol fees that is withdrawn")))))}k.isMDXComponent=!0},3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return f}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),f=r,N=s["".concat(d,".").concat(f)]||s[f]||k[f]||i;return a?n.createElement(N,l(l({ref:e},m),{},{components:a})):n.createElement(N,l({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);