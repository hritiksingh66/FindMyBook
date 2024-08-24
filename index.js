console.log("Working.....")

const SEARCH_KEY = 'https://openlibrary.org/search.json?title='

async function searchBook(){
    try{
    let bookName = prompt("Enter book Name");

    bookName = bookName.split(' ').join('+')

    let url = SEARCH_KEY+bookName

    console.log(url)
    
    let result = await fetch(url);

    let data = await result.json() //data get converted into object

    console.log(data)

    //data.docs[0].author_name[0]

    // console.log(data.docs[0].author_name[0])
    // console.log(data.docs[0].title)
    // console.log(data.docs[0].first_publish_year)
    // console.log(data.docs[0].first_sentence[0])

    alert(`Author Name:${data.docs[0].author_name[0]}\nTitle:${data.docs[0].title}\nFIRST PUBLISH YEAR:${data.docs[0].first_publish_year}\nFIRST SENTENCE:${data.docs[0].first_sentence?data.docs[0].first_sentence[0]:"No first sentence"}`)
}
catch(err){
    console.log(err)
}
}