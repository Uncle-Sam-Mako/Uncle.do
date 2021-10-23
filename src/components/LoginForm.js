import Input from './Input';

export default function LoginForm() {
  return (
    <>
      <div className="mt-10 sm:px-5 sm:mt-0 max-w-md mx-auto ">
        <div className="">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white dark:bg-gray-800 sm:p-6">
                  <div className="">
                    <Input type="text" label="Votre pseudo"></Input>
                </div>
                </div>
                <div className="px-4 py-5 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                  <button
                    type="submit"
                    className="btn-red text-sm"
                  >
                      Commencer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}