function Filter(handleFilterPhrase) {

  const handleInput = (event) => {
    handleFilterPhrase (event.currentTarget.value)

  };

    return (
        <form >
          <label htmlFor=""> Filtrar por frase: </label>
          <input className='filter' type="text" placeholder='Buscar por frase' onInput = {handleInput}/>
          
         
          <label htmlFor="">Filtrar por personaje:    </label>
          <input className='filter' type="text" placeholder='Buscar por personaje' value="" />
       
        </form>
    );
}

export default Filter;