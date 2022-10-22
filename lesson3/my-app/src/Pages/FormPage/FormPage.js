
function FormPage() {

    const sayHello =() =>{
        alert('hello world')
    }

     const onDoubleClick =() =>{
        alert('hello world double')
    }
    const changeInput = (event)=>{
        console.log(event.target.value)
    }
    const submit =(e)=>{
        console.log('hi')
        e.preventDefault(e)
    }
        return(
            <>
                <input type="text" placeholder='name blur' onBlur={changeInput}/>
                <input type="text" placeholder='name' onChange={changeInput}/>
                <button onClick={sayHello}>say hello</button>

                <button onDoubleClick={onDoubleClick}>say hello double</button>
                <h1>-------------------------------------------------</h1>

                <form onSubmit={submit}>
                    <input type="text" onChange={changeInput}/>
                    <input type="text" onChange={changeInput}/>
                    <button type="submit">register user</button>
                </form>
                </>

        )
}
export default FormPage;