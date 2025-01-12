export default function Applications(props) {
  return (
    <div className="w-3/4 bg-dswdlightestblue pl-4 self-center rounded-lg">
      <div className="flex flex-col p-4 ">
        <p>
          {props.firstname} {props.lastname}
        </p>
        <p>{props.address}</p>
      </div>
    </div>
  );
}
