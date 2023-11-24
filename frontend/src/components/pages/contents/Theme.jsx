import { ReactDOM } from "react";
import style from './contents.css'
function Theme (){
  return(
    <section className="content-container">
      <div className="content-card">
        <svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 -960 960 960" width="48"><path d="M440-360h80v-100h100v-80H520v-100h-80v100H340v80h100v100Zm39.937 305Q329.105-92.81 232.052-227.409 135-362.007 135-522.674v-255.788L480-907l346 128.571V-523q0 160.79-97.616 295.49Q630.769-92.81 479.937-55Zm.063-96q110-43 180.5-144T731-522.706V-712l-251-95-251 95.484v188.345Q229-396 299.5-295 370-194 480-151Zm0-328Z"/></svg>
        <h5> Health and Life </h5>
      </div>
      <div className="content-card">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M340.4-474q42.6 0 73.361-31.073Q444.522-536.146 457-581l-70-17q-4.208 20.772-15.863 35.886Q359.481-547 339.741-547q-19.741 0-31.158-15.114Q297.167-577.228 294-598l-71 17q12.478 44.854 43.639 75.927Q297.8-474 340.4-474Zm139.338 220Q520-254 558-273.5t73-57.5l-53-48q-25 25.531-48.52 38.265Q505.961-328 479.98-328q-25.98 0-49.48-12.735Q407-353.469 383-379l-53 48q34 39 71.738 58 37.739 19 78 19ZM620.4-474q42.6 0 73.361-31.073Q724.522-536.146 737-581l-70-17q-4.208 20.772-15.864 35.886Q639.481-547 619.741-547q-19.741 0-31.158-15.114Q577.167-577.228 574-598l-71 17q12.478 44.854 43.639 75.927Q577.8-474 620.4-474ZM480.054-59Q393.51-59 316.32-91.445q-77.19-32.445-134.81-90.065-57.62-57.62-90.065-134.756Q59-393.401 59-479.946q0-86.544 32.445-163.734 32.445-77.19 89.908-134.863 57.463-57.672 134.672-90.565Q393.234-902 479.862-902q86.628 0 163.936 32.815 77.309 32.815 134.907 90.355 57.597 57.54 90.446 134.853Q902-566.663 902-479.917q0 86.683-32.892 163.857-32.893 77.173-90.565 134.672-57.673 57.498-134.809 89.943Q566.599-59 480.054-59ZM480-480Zm0 330q138.375 0 234.188-95.812Q810-341.625 810-480t-95.812-234.188Q618.375-810 480-810t-234.188 95.812Q150-618.375 150-480t95.812 234.188Q341.625-150 480-150Z"/></svg>
        <h5> Democracy and Peace </h5>
      </div>
      <div className="content-card">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M198-160q-48.25-48.009-74.125-112.506T98-402q0-75.984 27.559-140.56Q153.118-607.136 205-659q44-45 109-71t143.5-38.5Q536-781 626-782t182.733 6.603Q819-684 818.5-595q-.5 89-11.5 168.75t-38 146.563Q742-212.874 696-167q-51.936 52.961-115.071 80.48Q517.794-59 447.743-59q-75.431 0-136.087-23.5Q251-106 198-160Zm123-24q25.977 17 58.953 25t67.584 8q49.749 0 98.106-21.5Q594-194 633-233q31-34 51.5-87.5t29-116q8.5-62.5 10-128.5T722-690q-91-3-163.5 1.5t-128 16.5Q375-660 336-640.5T273.562-597Q234-558 211.5-510.723T189-416.355q0 43.355 18.363 94.271 18.363 50.916 47.925 81.084Q303-333 374-407t161-124q-83 76-136 162t-78 185Zm0 0Zm0 0Z"/></svg>
        <h5> Environment and Society </h5>
      </div>
      <div className="content-card">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480.722-61q-85.884 0-162.376-33.082-76.493-33.083-133.86-90.081-57.367-56.998-90.427-133.618Q61-394.4 61-480.2q0-85.8 33.03-162.149t90.366-133.388q57.337-57.039 134.147-90.651Q395.352-900 481.369-900q86.016 0 162.715 33.477t133.274 90.54q56.576 57.062 89.609 133.609Q900-565.828 900-479.914t-32.802 162.375q-32.802 76.462-89.748 133.584-56.946 57.122-134.077 90.039Q566.243-61 480.722-61ZM439-153v-80q-35 0-57.435-24.62-22.435-24.621-22.435-59.338v-42.657L162-557q-5 18.474-7 37.448t-2 37.981q0 123.241 81 219.906T439-153Zm284-104q20.286-22.287 36.62-49.145 16.334-26.857 27.054-55.282 10.719-28.425 16.022-58.165Q808-449.331 808-481.855q0-100.702-55.593-184.469Q696.815-750.091 604-788v16.327q0 34.436-22.909 58.554Q558.181-689 522.836-689H439v84.701Q439-586 426.5-576.5t-31.799 9.5H316v85h249.624q15.542 0 26.959 12.713Q604-456.575 604-440.745V-317h39.788q27.212 0 49.632 16.777Q715.84-283.446 723-257Z"/></svg>
        <h5> Globalization </h5>
      </div>
      <div className="content-card">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480.139-83Q398-83 326.706-114.21q-71.293-31.211-125.498-85.146-54.205-53.936-85.206-125.152Q85-395.723 85-477.861 85-560 116.002-631.354q31.001-71.354 85.169-125.415 54.168-54.06 125.413-85.843Q397.828-874.395 480-874.395V-978l166 167-166.143 166.872v-105.17q-112.371 0-191.114 79.494Q210-590.31 210-478.058q0 69.058 32.049 127.859 32.049 58.8 85.19 94.199 16.961-29.333 48.823-49.458 31.863-20.125 74.938-25.119-3-21.423-9.088-44.073Q435.824-397.3 430-415q-11.871 8.526-24.949 14.263Q391.972-395 375.401-395q-34.475 0-57.938-23.431Q294-441.861 294-477.312v-41.395q0-18.655-6.5-33.974Q281-568 272-583q51.933 1 92 10 35.023 10.33 65.003 31.636 29.979 21.305 30.997 63.915 0 8.232-2.5 15.84Q455-454 452-446q-13.333-9.231-27.167-17.615Q411-472 397-478q16.993 13.806 40.071 41.557Q460.15-408.692 480-371q22-51 52.7-99.685Q563.4-519.37 605-562q-23.106 17.667-45.264 36.06Q537.579-507.548 517-487q-6.533-12.064-10.767-25.628Q502-526.191 502-540.702q0-43.772 29.956-73.535Q561.912-644 604.768-644h40.624q23.659 0 39.836-6.486t25.962-15.135Q723.347-674.25 730-686q3 69-8.55 125.327-7.167 46.423-34.017 85.048T605.614-437q-16.463 0-30.881-5.067Q560.316-447.133 550-452q-6.84 18.549-15.811 52.138Q525.217-366.273 518-330q39.477 8.085 70.171 27.544Q618.865-282.997 634-256q53.384-35.729 84.982-94.196Q750.58-408.664 750.58-478H876q0 82.172-31.71 153.416-31.71 71.245-85.646 125.413-53.936 54.168-125.152 85.169Q562.277-83 480.139-83Z"/></svg>
        <h5> Sustainability </h5>
      </div>
    </section>
  );
}

export default Theme