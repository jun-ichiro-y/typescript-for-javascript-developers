import axios from "axios";
export { };


let url:string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

// ここではホストは定義されていないが、この場合はTS実行時の環境のサーバーになる
axios.get(url)
  .then(function (response) {
    interface Artcile{ //ineterface によって独自の型を定義できる
      id: number;
      tile: string;
      description: string;
    }
    let data: Artcile[] = response.data //type:anyは推論ができていない状態、すなわち分からない型　適切ではない
    data = [{ //Article型の宣言をしているため、下記の形式でないと代入不可
      id: 1,
      tile: "title",
      description:"description"
    }]
   
  console.log(data);
})
  

// data:[
//   {
//     id: 1,
//     title: 'Title for article #1!',
//     description: 'Description for article #1.'       
//   },
//   {
//     id: 2,
//     title: 'Title for article #2!',
//     description: 'Description for article #2.'       
//   },
//   {
//     id: 3,
//     title: 'Title for article #3!',
//     description: 'Description for article #3.'       
//   },
//   {
//     id: 4,
//     title: 'Title for article #4!',
//     description: 'Description for article #4.'       
//   },
//   {
//     id: 5,
//     title: 'Title for article #5!',
//     description: 'Description for article #5.'       
//   },
//   {
//     id: 6,
//     title: 'Title for article #6!',
//     description: 'Description for article #6.'       
//   },
//   {
//     id: 7,
//     title: 'Title for article #7!',
//     description: 'Description for article #7.'       
//   },
//   {
//     id: 8,
//     title: 'Title for article #8!',
//     description: 'Description for article #8.'       
//   },
//   {
//     id: 9,
//     title: 'Title for article #9!',
//     description: 'Description for article #9.'       
//   },
//   {
//     id: 10,
//     title: 'Title for article #10!',
//     description: 'Description for article #10.'      
//   }
// ]
