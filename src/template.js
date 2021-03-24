function Template(){
  return(
    <div className = "page-center">
      <div className = "col-1">
        <h1></h1>
        <code className = "code-snippet-ques"></code>
        <a href = ".html" className = "prev-btn"> &larr; </a>
      </div>
      <div className = "col-2">
        <a href = ".html" className = "next-btn"> &rarr; </a>
        <code className = "code-snippet-html"></code>
        <code className = "code-snippet-js"></code>
        <code className = "code-snippet-tip"></code>
      </div>
    </div>
  )
}

export default Template;
