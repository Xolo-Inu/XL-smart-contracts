pragma solidity ^0.8.0;





contract MockUniRouter {
    function balanceOf(address user) external pure returns (uint) {
        return 123123;
    }

    function factory() external view returns (address) {
        return address(this);
    }

    function getPair(address tokenA, address tokenB) external view returns (address pair) {
        return address(this);
    }

    function transfer(address to, uint value) external returns (bool) { return true; }

    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity) {
        return (amountTokenDesired, msg.value, 1000);
    }
}
