function recursiva(max){
    if(max >= 100){
        console.log(`${max} é maior`);
        return;
    }
    max++;
    console.log(max);
    recursiva(max)
}
recursiva(0);
