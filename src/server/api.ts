export default function getShowList(): Promise<any> {
  let promiseObj = fetch("https://api.tvmaze.com/shows").then((res) =>
    res.json()
  );
  return promiseObj;
}
