//Masukan Angka
const Numbers = document.querySelectorAll(".Number");
Numbers.forEach(Number => {
    Number.addEventListener("click",(event)=>{
    InputNumbers(event.target.value)
    UpdateScreen(CurrentNumber)
    })
});
// Input Operator
const Operators = document.querySelectorAll(".Operator");
Operators.forEach((Operator) =>{
    Operator.addEventListener("click",(event)=>{
        InputOperator(event.target.value)
    })
})
const InputOperator = (Operator)=>{
    if(CalculationOperation === ''){
        PrevNumber = CurrentNumber;
    }
    CalculationOperation = Operator
    CurrentNumber =''
}
//Fungsi Kalkulasi
const EqualSign = document.querySelector('.Equal-Sign');
EqualSign.addEventListener("click",()=>{
    Kalkulasi();
    UpdateScreen(CurrentNumber);
    console.log("Oke");
})
//Perhitungan
const Kalkulasi = ()=>{
    let Hasil=''
    switch(CalculationOperation){
        case "+":
            Hasil = parseFloat (PrevNumber) + parseFloat (CurrentNumber);
        break
        case "-":
            Hasil = PrevNumber - CurrentNumber;
        break
        case "*":
            Hasil = PrevNumber * CurrentNumber;
        break
        case "/":
            Hasil = PrevNumber / CurrentNumber;
        break
        case "%":
            Hasil =  PrevNumber / 100;
            break
        default:
            return
    }
    CurrentNumber = Hasil
    CalculationOperation = ''
}
//Update Layar Per Input
const ScreenCalculator = document.querySelector(".Screen");
const UpdateScreen = (Number)=>{
    ScreenCalculator.value=Number
};
//Simpan Inputan
let PrevNumber = '';
let CalculationOperation = '';
let CurrentNumber ='0';

const InputNumbers = (Number)=>{
    if(CurrentNumber === '0'){
        CurrentNumber = Number;
    }else{
        CurrentNumber += Number;
    }
}
//Button Clear ALL
const ClearAll = document.querySelector(".ClearAll");
ClearBtn=()=>{
    CurrentNumber='0'
    PrevNumber=''
    CalculationOperation=''
}

ClearAll.addEventListener("click",()=>{
    ClearBtn();
    UpdateScreen(CurrentNumber);
})
//Input Decimal
const Decimal = document.querySelector(".Decimal");
InputDecimal = (Titik)=>{
    if(CurrentNumber.includes('.')){
        return
    }
    CurrentNumber += Titik;
}
Decimal.addEventListener("click",(event)=>{
    InputDecimal(event.target.value);
    UpdateScreen(CurrentNumber)
})
//Percentage
const Persen = document.getElementById('Persen');
Persen.addEventListener('click',(event)=>{
    hitungPersen();
})
const hitungPersen =()=>{
    let Hasil = PrevNumber/100;
    UpdateScreen(Hasil);
}