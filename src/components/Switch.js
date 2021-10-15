
export default function Switch(props){
    return(    
        <div class="space-y-4">
            <h2 class="text-xl text-gray-500">iOS mode</h2>
            <div class="bg-white p-8 rounded-xl shadow">
            <div class="flex md:justify-start justify-center items-end bg-gray-100 border relative sm:rounded-xl rounded-3xl h-[50vh]">
                <div class="w-max m-auto">
                <div class="flex gap-8 items-center">
                    <label for="iosMode" class="flex w-10 h-10 rounded-full bg-yellow-500 bg-opacity-0 text text-yellow-400 tracking-wider text-sm font-semibold hover:bg-opacity-10 active:bg-opacity-20 focus:outline-none cursor-pointer transition">
                    <span class="m-auto material-icons" style="font-size:20px">light_mode</span>
                    </label>
                    <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="iosMode" id="iosMode" class="absolute ml-0.5 top-0.5 peer block w-6 h-6 rounded-full bg-white shadow-md appearance-none cursor-pointer checked:translate-x-5 transition delay-75 duration-500"/>
                    <label for="iosMode" class="block overflow-hidden h-7 rounded-full bg-gray-200 cursor-pointer peer-checked:bg-cyan-800 transition"></label>
                    </div>
                    <label for="iosMode" class="flex w-10 h-10 rounded-full bg-gray-500 bg-opacity-0 text text-gray-500 tracking-wider text-sm font-semibold hover:bg-opacity-10 active:bg-opacity-20 focus:outline-none cursor-pointer transition">
                    <span class="m-auto material-icons rotate-12 scale-75">mode_night</span>
                    </label>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}