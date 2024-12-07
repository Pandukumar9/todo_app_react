function one(){ //parent

    const test= (data)=> {

    }
    return(
        <>
          <two msg1={test} msg2={'hello2'}></two>
          {/* child */}
        </>
    )
}

// export default one

// p={msg1:'hello' , msg2:'hello2'};
function two(p){
    return(
        <>
          <p>{p.msg1}</p>
          <p>{p.msg2}</p>
        </>
    )
}

// we knows parent to child like props use but child to parent we are doing now
//parent component => creat one function and pass that function as a props to child
//provide child data as input to prop function

export default one

