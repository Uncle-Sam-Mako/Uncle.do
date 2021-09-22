import Input from './Input';

export default function Form() {
  return (
    <>
      <div className="mt-10 sm:px-5 sm:mt-0 max-w-md mx-auto ">
        <div className="">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="">
                    <Input type="text" label="Nom de la tâche"></Input>
                    <Input type="textarea" label="Description"></Input>
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