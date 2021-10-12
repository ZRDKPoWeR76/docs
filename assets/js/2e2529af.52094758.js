(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[3410],{1649:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var t=n(2122),i=n(9756),o=(n(7294),n(3905)),c={},a=void 0,p={unversionedId:"reference/periphery/libraries/HexStrings",id:"version-V3/reference/periphery/libraries/HexStrings",isDocsHomePage:!1,title:"HexStrings",description:"Functions",source:"@site/versioned_docs/version-V3/reference/periphery/libraries/HexStrings.md",sourceDirName:"reference/periphery/libraries",slug:"/reference/periphery/libraries/HexStrings",permalink:"/protocol/reference/periphery/libraries/HexStrings",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/periphery/libraries/HexStrings.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"ChainId",permalink:"/protocol/reference/periphery/libraries/ChainId"},next:{title:"LiquidityAmounts",permalink:"/protocol/reference/periphery/libraries/LiquidityAmounts"}},s=[{value:"Functions",id:"functions",children:[{value:"toHexString",id:"tohexstring",children:[]},{value:"toHexStringNoPrefix",id:"tohexstringnoprefix",children:[]}]}],l={toc:s};function u(e){var r=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"tohexstring"},"toHexString"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toHexString(\n  ) internal returns (string)\n")),(0,o.kt)("p",null,"Converts a ",(0,o.kt)("inlineCode",{parentName:"p"},"uint256")," to its ASCII ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," hexadecimal representation with fixed length."),(0,o.kt)("p",null,"Credit to Open Zeppelin under MIT license ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/243adff49ce1700e0ecb99fe522fb16cff1d1ddc/contracts/utils/Strings.sol#L55"},"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/243adff49ce1700e0ecb99fe522fb16cff1d1ddc/contracts/utils/Strings.sol#L55")),(0,o.kt)("h3",{id:"tohexstringnoprefix"},"toHexStringNoPrefix"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toHexStringNoPrefix(\n  ) internal returns (string)\n")))}u.isMDXComponent=!0},3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);