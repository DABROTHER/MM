import CardSkeleton from '../../CardSkeleton'

const CollectionInfoSkeleton = () => {
  return (
    <>
      <div className="mt-2 flex flex-col gap-3">
        <div className="h-[35.49px]  w-[375px]">
          <CardSkeleton className="flex h-full w-full" />
        </div>
        <div className="h-3 w-[174px]">
          <CardSkeleton className="flex h-full w-full" />
        </div>
        <div className="mt-1 flex flex-col gap-1">
          <div className="h-2  w-[554px]">
            <CardSkeleton className="flex h-full w-full" />
          </div>
          <div className="h-2 w-[554px]">
            <CardSkeleton className="flex h-full w-full" />
          </div>
        </div>
      </div>
      <div className="mt-[5px] flex w-[554px] flex-row">
        <div className="flex w-full flex-row items-end text-start xl:min-h-[37px]">
          {Array(6)
            .fill('')
            .map((obj, i) => (
              <div className="flex w-full flex-col gap-1" key={i}>
                {Array(2)
                  .fill('')
                  .map((__, j) => (
                    <div className="h-3 w-[75px]" key={j}>
                      <CardSkeleton className="flex h-full w-full" />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
export default CollectionInfoSkeleton
