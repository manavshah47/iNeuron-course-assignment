// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract MyContract{
    uint[] public arr = [1,2,3,4,5,6];

    function deleteAtIndex(uint position) public {
        uint lastSecond = arr.length-1;
        for(uint i = position;i<lastSecond;i++){
            arr[i] = arr[i+1];
        }
        arr.pop();
    }
}