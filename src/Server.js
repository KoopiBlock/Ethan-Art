/* const getData = async () => {
  console.log('hey');
  let data = await $.get("/core/pages/index.php", function(data, status){
    console.log(data);
  });
  return data;
};
 */
export const getData = async () => {

    /* const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Hello!' })
    }

    fetch('http://localhost:80/react/db.php',requestOptions)
    .then((response) => {
      console.log(response)
    })
    .catch(err => {
      alert('error')
    }) */
    
    let data = await fetch("./index.php", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }).then (function (response) {return response.json()})
        .then(function (json) { console.log(json); })
        .catch(function (error) {/*Handle error*/});
    
    return data;
};
