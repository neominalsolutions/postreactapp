import axios from "axios";


// servislerin içerisinde context yapısını kullanamayız.
// useContext ile apiden çekilen bilgileri sadece Component içerisinde set edebiliyoruz.

export async function GetPosts(){
//    const {setPosts} =  useContext(PostsContext)
    try {

        var response =  await axios.get('https://jsonplaceholder.typicode.com/posts');

        const data = response.data;
        console.log('data', data);
        // setPosts(data);

        return data;

    } catch (error) {
        console.log('err',error)
    } 

}