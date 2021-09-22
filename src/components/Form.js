
export default function Form() {
  return (
    <>
      <div className="mt-10 sm:px-5 sm:mt-0 max-w-md mx-auto">
        <div className="">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="">
                    <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Nom de la tâche
                        </label>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-customRed focus:border-customRed block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Description de la tâche
                        </label>
                        <div className="mt-1">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-customRed focus:border-customRed mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="you@example.com"
                            defaultValue={''}
                        />
                        </div>
                  </div>
                    <div className="block text-sm font-medium text-gray-700">
                        <label htmlFor="color">Couleur</label>
                        <div className="inputs">
                            <input type="radio" name="red" id="red"/>
                            <input type="radio" name="red" id="red"/>
                            <input type="radio" name="red" id="red"/>
                            <input type="radio" name="red" id="red"/>
                        </div>
                    </div>  

                </div>
                </div>
                <div className="px-4 py-5 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="btn-red text-sm"
                  >
                      Ajouter la tâche
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