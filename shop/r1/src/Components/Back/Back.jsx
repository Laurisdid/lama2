function Back({show}){
    if(show==='admin'){
        return(
            <h1>Back</h1>
        )
    }
    if(show==='cats'){
        return(
            <CatsCrud/>
        )
    }
    if(show==='products'){
        return(
            <ProductsCrud/>
        )
    }
  
}
export default Back