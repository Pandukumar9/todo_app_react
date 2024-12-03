function Listkey(){
    let lists1 = ['html', 'css' , 'javascript'];

    let lists2 = [{id:1 , lang:'html'},{id:2 , lang:'css'},{id:3 , lang:'javascript'}];
    return (
        <>
          <h2>list and key conccepts</h2>
          <div>
            {lists1}
          </div>

          {
            lists1.map((l,index) => 
                <li key={index}>{l}</li>
            )
          }

          {
            lists2.map((l,index) => 
                <li key={l.id}>{l.lang}</li>
            )
          }
        </>
    )
}

export default Listkey