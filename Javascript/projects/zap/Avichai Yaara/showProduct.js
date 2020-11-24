function handleShowProduct(e){
    const img = e.target.currentSrc

    console.log(e.target.dataset.td)
    const chosenProduct = e.target.dataset.td
    console.log(results[chosenProduct])
    console.log(results)

}