import { ReactDOM } from "react";
import style from './contents.css'
function Hability (){
  return(
    <section className="content-container">
      <div className="content-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/></svg>
        <h5> Reading </h5>
      </div>
      <div className="content-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z"/></svg>
        <h5> Listening </h5>
      </div>
      <div className="content-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
        <h5> Writing </h5>
      </div>
      <div className="content-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m798-322-62-62q44-41 69-97t25-119q0-63-25-118t-69-96l62-64q56 53 89 125t33 153q0 81-33 153t-89 125ZM670-450l-64-64q18-17 29-38.5t11-47.5q0-26-11-47.5T606-686l64-64q32 29 50 67.5t18 82.5q0 44-18 82.5T670-450Zm-310 10q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H40Zm80-80h480v-32q0-11-5.5-20T580-266q-36-18-92.5-36T360-320q-71 0-127.5 18T140-266q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0-80Zm0 400Z"/></svg>
        <h5> Speaking </h5>
      </div>
      <div className="content-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M680-360q-17 0-28.5-11.5T640-400v-160q0-17 11.5-28.5T680-600h120q17 0 28.5 11.5T840-560v40h-60v-20h-80v120h80v-20h60v40q0 17-11.5 28.5T800-360H680Zm-300 0v-240h160q17 0 28.5 11.5T580-560v40q0 17-11.5 28.5T540-480q17 0 28.5 11.5T580-440v40q0 17-11.5 28.5T540-360H380Zm60-150h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-320 60v-200q0-17 11.5-28.5T160-600h120q17 0 28.5 11.5T320-560v200h-60v-60h-80v60h-60Zm60-120h80v-60h-80v60Z"/></svg>
        <h5> Grammar </h5>
      </div>
      <div className="content-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/></svg>
        <h5> Pronunciation </h5>
      </div>
    </section>
  );
}

export default Hability