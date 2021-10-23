import { Component } from 'react';
import Input from './Input';
import Radio from './Radio';
export default class Form extends Component {

  render(){
    return (
      <>
        <div className="mt-10 sm:px-5 sm:mt-0 max-w-md mx-auto ">
          <div className="">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" >
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 ">
                    <div className="">
                      <Input type="text" label="Nom de la tâche"></Input>
                      <Input type="textarea" label="Description"></Input>
                      <div className="block text-sm font-medium text-gray-700 dark:text-gray-500">
                          <label htmlFor="color">Couleur</label>
                          <div className="inputs my-3">
                              <Radio color="rgb(2, 132, 199)" colorId="blue"></Radio>
                              <Radio color="#3e98ff" colorId="blue"></Radio>
                              <Radio color="#00ffbf" colorId="cyan"></Radio>
                              <Radio color="#c300ff" colorId="purple"></Radio>
                              <Radio color="#ffb400" colorId="yellow"></Radio>
                          </div>
                      </div>  
                  </div>
                  </div>
                  <div className="px-4 py-5 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
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
}