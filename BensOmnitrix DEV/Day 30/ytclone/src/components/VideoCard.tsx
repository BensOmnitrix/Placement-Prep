export const VideoCard = (props: any) => {
  return (
    <div>
      <div>
        <div>
          <img
            src={props.thumbImage}
            alt=""
            className="rounded-xl border-gray-400"
          />
        </div>
        <div className="h-1.5 w-40 rounded-sm relative bottom-2 bg-red-500 flex items-center justify-center"></div>
      </div>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 flex justify-center items-center h-12 w-12 rounded-full border-2 border-gray-300">
          <img src={props.channelImage} alt="" className="rounded-full h-10" />
        </div>
        <div className="col-span-11 pl-8">
          <div>{props.title}</div>
          <div className="text-gray-400 text-base">{props.author}</div>
          <div className="text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};
