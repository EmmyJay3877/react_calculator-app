import React from 'react'

const Calculator = () => {

    const [previousNum, setPreviousnum] = React.useState('')
    const [symbol, setSymbol] = React.useState('')
    const [overwrite, setOverwrite] = React.useState(false)
    const [currentNum, setCurrentnum] = React.useState('')

    function clear(){
        setPreviousnum('')
        setSymbol('')
        setCurrentnum('')
        setOverwrite(false)
    }


    function evaluate(a,b){
        if(symbol === '+'){
            const first = parseInt(a);
            const second = parseInt(b);
            // clear()
            return (first + second)
            }
        if(symbol === '-'){
            const first = parseInt(a);
            const second = parseInt(b);
            // clear()
            return (first - second)
            }
        if(symbol === '*'){
            const first = parseInt(a);
            const second = parseInt(b);
            // clear()
            return (first * second)
            }
        if(symbol === '/'){
            const first = parseInt(a);
            const second = parseInt(b);
            // clear()
            return (first / second)
            }
    }    

  return (
    <div>
        <div className='border-0 w-fit h-fit'>
            <div id='output-one' className='flex justify-end border-2 border-b-0 border-transparent mt-0 ml-0 text-gray-300 text-lg p-0 pr-2 pt-4 w-full h-20'>{previousNum} {symbol}</div>
            <div id='output-two' className='flex justify-end border-2 border-t-0 border-transparent mt-0 ml-0 text-white text-4xl p-0 pr-4 w-full h-14'>{currentNum}</div>
            <div className='flex justify-start'>
            <span id='button-one' className='flex m-0 mt-0 text-2xl font-bold'>
            <button type='button' className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('7')
                }
                setCurrentnum(currentNum.concat('7'))
            }}>7</button> 
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('8')
                }
                setCurrentnum(currentNum.concat('8'))
            }}>8</button> 
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('9')
                }
                setCurrentnum(currentNum.concat('9'))
            }}>9</button>
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('0')
                }
                setCurrentnum(currentNum.concat('0'))
                if(currentNum[0] === '0'){
                    setCurrentnum(currentNum.concat(''))
                }
            }}>0</button>
            <button className='flex justify-center border-2 px-8 py-6 mr-0 border-white w-12 hover:bg-white cursor-pointer'
            onClick={()=> {
                if(previousNum === '' && currentNum !== ''){
                    setPreviousnum(currentNum);
                    setSymbol('+')
                    setCurrentnum('')
                }else if(currentNum !== ''){
                    setSymbol('+')
                    let num = evaluate(previousNum, currentNum)
                    setPreviousnum(num)
                    setCurrentnum('')
                }
            }}>+</button> 
            <button className='flex justify-center border-2 px-9 pr-8 py-6 mr-0 border-white w-12 hover:bg-white cursor-pointer'
            onClick={() => {
                if(previousNum === '' && currentNum !== ''){
                    setPreviousnum(currentNum)
                    setSymbol('-')
                    setCurrentnum('')
                }else if(currentNum !== ''){
                    setSymbol('-')
                    let num = evaluate(previousNum, currentNum)
                    setPreviousnum(num)
                    setCurrentnum('')
                }
                }}>-</button>
            </span>
            </div>
            <div className='flex justify-start'>
            <span id='button-one' className='flex m-0 text-2xl font-bold'>
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('6')
                }
                setCurrentnum(currentNum.concat('6'))
            }}>6</button> 
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('5')
                }
                setCurrentnum(currentNum.concat('5'))
            }}>5</button> 
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('4')
                }
                setCurrentnum(currentNum.concat('4'))
            }}>4</button>
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(currentNum !== '' && !currentNum.includes('.')){
                    setCurrentnum(currentNum.concat('.'))
                }
            }}>.</button>
            <button className='flex justify-center border-2 px-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={() => {
                if(previousNum === '' && currentNum !== ''){
                    setPreviousnum(currentNum)
                    setSymbol('*')
                    setCurrentnum('')
                }else if(currentNum !== ''){
                    setSymbol('*')
                    let num = evaluate(previousNum, currentNum)
                    setPreviousnum(num)
                    setCurrentnum('')
                }
                }}>*</button> 
            <button className='flex justify-center border-2 px-9 pr-8 py-6 mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={() => {
                if(previousNum === '' && currentNum !== ''){
                    setPreviousnum(currentNum)
                    setSymbol('/')
                    setCurrentnum('')
                }else if(currentNum !== ''){
                    setSymbol('/')
                    let num = evaluate(previousNum, currentNum)
                    setPreviousnum(num)
                    setCurrentnum('')
                }
                }}>/</button>
            </span>
            </div>
            <div className='flex justify-start'>
            <span id='button-one' className='flex m-0 font-bold'>
            <button className='flex justify-center border-2 px-8 py-6 text-2xl mr-0 hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('1')
                }
                setCurrentnum(currentNum.concat('1'))
            }}>1</button> 
            <button className='flex justify-center border-2 px-8 py-6 mr-0 text-2xl hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('2')
                }
                setCurrentnum(currentNum.concat('2'))
            }}>2</button> 
            <button className='flex justify-center border-2 px-8 py-6 mr-0 text-2xl hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=>{
                if(overwrite === true){
                    setCurrentnum('3')
                }
                setCurrentnum(currentNum.concat('3'))
            }}>3</button>
            <button className='flex justify-center border-2 px-16 py-6 mr-0 text-2xl hover:bg-white border-white w-12 cursor-pointer'
            onClick={()=> {
                let ans = evaluate(previousNum, currentNum)
                setPreviousnum('')
                setSymbol('')
                setCurrentnum(ans)
                setOverwrite(true)
                }}>=</button> 
            <button className='flex justify-center items-center border-2 px-9 py-6 hover:bg-red-500 mr-0 text-sm border-white w-12 cursor-pointer'
            onClick={clear}>clear</button>
            </span>
            </div>
        </div>
    </div>
  )
}

export default Calculator