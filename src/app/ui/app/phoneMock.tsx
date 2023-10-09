import { useStore } from '@/lib/store/zustand';

export default function PhoneMock() {
  const { title, bio, linkBold, linkSize, linkBackgroundColor, linkTextColor } =
    useStore();

  return (
    <>
      <div className='hidden text-xs text-sm text-base text-lg text-xl' />
      <div className='relative border-gray-800 text- bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]'>
        <div className='h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg'></div>
        <div className='h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg'></div>
        <div className='h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg'></div>
        <div className='h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'></div>
        <div className='rounded-[2rem] overflow-hidden overflow-y-scroll scrollbar-hide w-[272px] h-[572px] bg-white'>
          <div className='py-12 px-8 text-center flex flex-col gap-2 items-center'>
            <div className='w-20 h-20 mb-4 rounded-full border border-solid border-slate-700' />
            <span className='text-xl font-bold text-black'>
              {title.length > 0 ? title : 'Please add title'}
            </span>
            <span className='text-sm text-black'>
              {bio.length > 0 ? bio : 'Please add bio'}
            </span>
            <div className='flex gap-2 mt-4'>
              <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
              <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
              <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
              <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
            </div>
            <span className='uppercase text-sm font-bold mt-4 mb-2'>
              Useful links
            </span>
            <div className='w-full flex flex-col gap-2'>
              <div
                className='flex justify-center items-center px-6 py-2 w-full rounded'
                style={{ background: linkBackgroundColor }}
              >
                <span
                  className={`${linkBold ? 'font-bold' : ''} text-${linkSize}`}
                  style={{ color: linkTextColor }}
                >
                  Lorem Ipsum
                </span>
              </div>
              <div
                className='flex justify-center items-center px-6 py-2 w-full rounded'
                style={{ background: linkBackgroundColor }}
              >
                <span
                  className={`${linkBold ? 'font-bold' : ''} text-${linkSize}`}
                  style={{ color: linkTextColor }}
                >
                  Lorem Ipsum
                </span>
              </div>
            </div>
            <span className='uppercase text-sm font-bold mt-4 mb-2'>
              Show your support
            </span>
            <div className='w-full flex flex-col gap-2'>
              <div
                className='flex justify-center items-center px-6 py-2 w-full rounded'
                style={{ background: linkBackgroundColor }}
              >
                <span
                  className={`${linkBold ? 'font-bold' : ''} text-${linkSize}`}
                  style={{ color: linkTextColor }}
                >
                  Buy me a coffee!
                </span>
              </div>
            </div>

            <div className='mt-12'>
              <span>LinkLeaf</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
