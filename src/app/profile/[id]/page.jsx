export default function UserProfilePage({params}, any){
    return (
        <div className="h-screen flex flex-col justify-center ">
            <h1 className="text-6xl flex justify-center">Profile</h1>
            <span className="text-2xl p-2 flex justify-center">Hello User
             <button className="p-1 m-1 rounded-lg bg-orange-400">{params.id}</button></span>
        </div>
    )
} 