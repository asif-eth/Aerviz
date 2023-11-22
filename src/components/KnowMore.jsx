import React from "react";

const KnowMore = () => {
  return (
    <section className="bg-[white] p-[3rem]">
      <div className="text-[black] text-[1.5rem] font-Cabin">
        Know more about Singapore as a traveler ✈️
      </div>
      <div className="text-[#A9ACAC] pb-[2.5rem]">
        Understand more about the country
      </div>

      <div className="shadow-2xl flex justify-between rounded-t-[1.25rem] overflow-hidden">
        <div className="flex flex-col items-center p-[2.5rem] gap-[0.5rem]  bg-[#F6EDFF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M2.66732 5.33203C2.3137 5.33203 1.97456 5.47251 1.72451 5.72256C1.47446 5.9726 1.33398 6.31174 1.33398 6.66536V25.332C1.33398 25.6857 1.47446 26.0248 1.72451 26.2748C1.97456 26.5249 2.3137 26.6654 2.66732 26.6654H29.334C29.6876 26.6654 30.0267 26.5249 30.2768 26.2748C30.5268 26.0248 30.6673 25.6857 30.6673 25.332V6.66536C30.6673 6.31174 30.5268 5.9726 30.2768 5.72256C30.0267 5.47251 29.6876 5.33203 29.334 5.33203H2.66732ZM12.0007 13.332C12.0007 12.9784 11.8602 12.6393 11.6101 12.3892C11.3601 12.1392 11.0209 11.9987 10.6673 11.9987C10.3137 11.9987 9.97456 12.1392 9.72451 12.3892C9.47446 12.6393 9.33398 12.9784 9.33398 13.332C9.33398 13.6857 9.47446 14.0248 9.72451 14.2748C9.97456 14.5249 10.3137 14.6654 10.6673 14.6654C11.0209 14.6654 11.3601 14.5249 11.6101 14.2748C11.8602 14.0248 12.0007 13.6857 12.0007 13.332ZM14.6673 13.332C14.6673 14.3929 14.2459 15.4103 13.4957 16.1605C12.7456 16.9106 11.7282 17.332 10.6673 17.332C9.60645 17.332 8.58904 16.9106 7.83889 16.1605C7.08875 15.4103 6.66732 14.3929 6.66732 13.332C6.66732 12.2712 7.08875 11.2537 7.83889 10.5036C8.58904 9.75346 9.60645 9.33203 10.6673 9.33203C11.7282 9.33203 12.7456 9.75346 13.4957 10.5036C14.2459 11.2537 14.6673 12.2712 14.6673 13.332ZM7.36998 22.6987L5.48465 20.8134C6.16514 20.1314 6.97363 19.5906 7.86371 19.222C8.7538 18.8534 9.70793 18.6642 10.6713 18.6654C12.6953 18.6654 14.53 19.488 15.8553 20.812L13.97 22.6987C13.5372 22.2645 13.0229 21.9203 12.4565 21.6857C11.8901 21.4512 11.283 21.331 10.67 21.332C9.38065 21.332 8.21665 21.852 7.36998 22.6987ZM26.9433 14.2747L21.61 19.608L20.6673 20.5507L19.7247 19.608L16.3913 16.2747L18.2767 14.3894L20.6673 16.78L25.058 12.3894L26.9433 14.2747Z"
              fill="#23005C"
            />
          </svg>
          <div className="text-blue-active font-Cabin">
            Eligibility Criteria
          </div>
        </div>

        <div className="flex flex-col items-center p-[2.5rem] gap-[0.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_2141_1462)">
              <path
                d="M0.639844 3.83984C0.427671 3.83984 0.224187 3.92413 0.0741583 4.07416C-0.0758708 4.22419 -0.160156 4.42767 -0.160156 4.63984V27.3598C-0.160156 27.572 -0.0758708 27.7755 0.0741583 27.9255C0.224187 28.0756 0.427671 28.1598 0.639844 28.1598H22.0414C21.7618 27.7918 21.4827 27.4235 21.2018 27.0558C20.8523 26.5403 20.3448 26.099 20.196 25.4725C18.1384 26.3218 15.7742 26.4005 13.6629 25.6955C13.6165 25.6805 13.571 25.6619 13.525 25.6462C13.2827 25.883 13.0216 26.2958 12.9803 26.5598H9.93808C10.1666 25.7858 9.68144 24.5771 10.1403 23.7893C10.1768 23.7797 10.221 23.7179 10.2411 23.6542C10.1893 23.6056 10.1368 23.5582 10.0862 23.5086C9.63632 23.6456 9.45648 23.9845 9.20624 24.2818C9.34288 24.9294 8.35664 24.7762 8.45616 25.437C9.1432 25.9698 7.82192 25.5637 7.42896 25.6062C7.012 25.6107 5.79216 25.1742 6.21552 26.067C6.14928 26.3122 6.2104 26.4626 6.33232 26.5598H6.14544C6.11632 26.2795 5.58832 26.2379 5.3848 26.1003C5.04208 26.0171 4.6328 25.9755 4.27792 25.8174C4.18672 26.0709 3.36368 26.3608 3.18352 26.5598H1.43984V14.8699C1.68528 15.0344 2.23568 14.9691 1.4856 14.6139H1.43984V10.9294C1.58544 10.8558 1.68944 10.8325 1.68304 10.9557C2.04368 10.8341 2.2008 9.95632 2.8248 10.3157C3.21392 10.373 3.85776 10.9762 3.53424 11.0517C3.7864 11.6674 3.96528 11.2709 4.27472 12.0046C4.06288 13.0082 4.87408 13.7518 5.3192 14.3915C5.85232 14.613 6.0632 15.3022 6.92976 15.3291C7.04752 15.4322 7.19856 15.5256 7.356 15.6152C7.3992 15.2843 7.46032 14.956 7.53744 14.6315C7.51664 14.6267 7.49648 14.6238 7.47408 14.6165C6.64048 15.3854 6.4696 14.0542 7.28368 14.0021C7.33808 13.9986 7.39664 14.0014 7.45968 14.0101C7.55408 13.9989 7.63248 14.0101 7.69872 14.0334C7.96605 13.157 8.36216 12.3252 8.87408 11.5653C9.14899 11.1551 9.45758 10.7684 9.79664 10.4094C9.62832 10.1278 9.45616 9.97072 9.25296 10.3384C9.2376 9.7928 7.7624 9.22096 8.84784 9.74448C9.41712 10.235 9.60368 9.65936 9.6936 9.2664C10.1816 8.7576 9.19344 8.58384 9.3736 8.25136C9.07408 7.8024 8.63056 7.34256 8.17488 7.06448C7.29104 7.16688 6.98128 6.98032 8.16304 6.97968C8.2696 6.42768 8.44656 6.03664 8.56848 5.572C8.44048 5.5352 8.30672 5.54096 8.17488 5.54064C7.60944 5.4648 7.27376 5.68336 7.28528 6.11504C6.86064 6.08112 7.24208 5.35728 6.58736 5.5784C5.59472 5.56272 6.79472 5.89808 6.70256 5.9464C6.58896 6.20112 5.87376 6.0424 5.95792 6.30064C5.63024 5.69456 5.48112 6.5896 5.22608 5.97648C5.07248 5.82928 5.86928 6.12176 5.68784 5.58512C5.28656 5.43152 5.14288 5.70032 4.83024 5.81008C3.89712 6.32656 4.99312 6.81232 5.46704 6.98448C6.18128 6.79408 6.18064 6.55344 6.67728 6.81808C7.23408 7.12688 6.11504 6.90992 6.14928 7.38512C6.08528 7.08976 6.00528 6.91152 5.65968 7.29008C5.19888 7.37328 4.99312 6.74 4.64912 6.78448C3.86512 6.67792 4.15792 8.44112 4.80368 7.8408C5.1944 8.51696 4.30448 8.01808 4.04048 7.94256C3.44432 8.60848 2.80208 7.92528 2.0904 7.89776C1.86256 7.74608 1.6392 7.74416 1.43984 7.82128V5.43984H9.8312C9.2328 5.45616 8.6984 5.5352 8.916 5.9656C8.8808 6.79568 9.95472 6.13648 10.1093 6.8872C10.5554 7.41168 9.844 8.52688 10.6155 8.33104C10.3317 8.67632 10.3672 9.2264 10.5886 9.66C11.4078 8.97247 12.3368 8.42769 13.3368 8.04848C13.3544 7.94992 13.3406 7.83664 13.2818 7.70288C13.1816 7.2008 13.6475 7.04048 13.4843 6.48368C13.7038 6.06448 13.5336 5.62096 13.1573 5.43984H30.5598V7.7048C30.5102 7.68353 30.4592 7.66557 30.4072 7.65104C29.9563 8.05968 30.3208 8.0984 30.5598 8.00656V8.36368C30.0267 8.06384 29.4411 8.03088 28.8725 8.15568C28.6142 7.70672 27.7 7.71728 27.3992 7.31312C26.8693 6.67824 27.5608 6.86768 28.0232 6.81872C27.892 6.42192 27.1048 6.23376 26.7723 6.29936C26.1717 6.62832 27.0878 6.92336 26.9954 7.36496C26.9954 7.68592 26.604 7.68816 26.2626 7.67056C26.4005 7.33072 25.6088 6.9128 25.2949 7.18928C24.7006 7.00944 24.4741 7.11504 24.8661 6.49616C24.7291 6.02032 24.163 6.01136 23.9093 5.68112C23.5851 6.36848 23.0446 6.16016 22.4654 6.57872C22.2334 6.91792 21.7502 7.22256 21.7262 7.44656C21.3672 7.6152 21.0078 6.75472 20.756 7.51696C20.5275 8.16208 20.7688 8.47472 19.9979 7.94672C19.2002 7.09648 21.6005 6.36816 20.7083 6.00624C19.9678 6.22224 19.5227 6.74416 19.3755 7.4856C19.2958 7.65424 19.332 7.77168 19.4162 7.86672C22.227 8.70512 24.5531 10.9656 25.4987 13.7387C25.5134 13.5717 25.5413 13.411 25.5973 13.2936C25.8338 13.1131 25.6462 13.9864 26.1349 13.4898C25.7749 14.2626 27.0398 13.5922 27.211 13.2731C26.9602 12.6434 28.1134 12.3467 28.0866 12.228C27.6619 11.7826 27.9032 12.2258 27.4347 12.3278C27.2795 12.1211 27.7323 10.9877 27.1298 11.0917C26.2299 10.86 27.8952 10.1973 28.3448 10.4411C28.5496 9.68336 28.844 10.2869 28.3381 10.6354C28.1454 11.3077 28.2376 12.2248 28.8043 11.3262C29.059 11.0782 28.9957 10.4318 29.3272 10.3192C29.7726 10.1093 30.5675 9.94512 30.5467 9.29616C30.5512 9.29488 30.5554 9.2952 30.5598 9.29424V26.5598H29.293C29.5675 26.1797 29.9307 25.5294 29.5461 25.2936C28.9666 25.1934 28.5336 24.4946 27.8331 24.5237C27.517 24.1595 26.789 23.9752 26.5931 23.9042C26.3973 23.8331 26.0574 24.2437 25.7093 24.0622C25.6045 24.0453 25.4975 24.0473 25.3934 24.068C26.4411 25.428 27.4789 26.7954 28.5205 28.1598H31.3598C31.572 28.1598 31.7755 28.0756 31.9255 27.9255C32.0756 27.7755 32.1598 27.572 32.1598 27.3598V4.63984C32.1598 4.42767 32.0756 4.22419 31.9255 4.07416C31.7755 3.92413 31.572 3.83984 31.3598 3.83984H0.639844ZM16.2206 5.54224C15.7054 5.796 16.619 6.80624 16.6443 5.84176C16.7387 5.98256 17.372 6.12464 17.165 5.67056C16.7048 5.39952 16.7746 5.7112 16.2203 5.54256L16.2206 5.54224ZM23.6066 5.54288C23.0507 5.8136 24.093 5.81872 23.6066 5.54288V5.54288ZM5.94896 5.63472C5.53296 5.94384 6.55952 6.24976 6.00336 5.65104L5.94896 5.63472ZM9.35536 5.81808C9.25264 5.8824 9.45936 5.91792 9.35536 5.81808V5.81808ZM5.33744 6.2136C5.31184 6.21776 5.3864 6.27024 5.33744 6.2136V6.2136ZM6.7624 6.34544C6.724 6.55024 7.26384 6.43248 6.7624 6.34544V6.34544ZM7.4648 6.40304C7.63984 6.52144 7.9416 6.37264 7.4648 6.40304V6.40304ZM6.0648 6.42416C6.02512 6.56784 6.37488 6.45616 6.0648 6.42416V6.42416ZM7.05744 6.87472C6.9032 6.97232 7.37104 6.94704 7.05744 6.87472V6.87472ZM7.27856 7.3736C7.08976 7.97584 7.9496 8.7912 7.2824 8.1048C7.09904 7.83024 7.00368 7.5672 7.27856 7.3736ZM6.1592 7.4344C6.43408 7.8936 6.85264 8.01616 6.50224 8.17424C6.2696 8.0616 6.21584 7.71088 6.1592 7.4344ZM10.4725 7.89744C10.3682 7.90384 10.5112 7.92336 10.4725 7.89744V7.89744ZM3.98416 8.0424C3.93456 8.04464 3.94832 8.18768 3.98416 8.0424V8.0424ZM6.46224 8.27728C6.316 8.27184 6.43984 8.58 6.46224 8.27728V8.27728ZM8.3016 8.2792C8.18192 8.8712 8.6568 8.83344 8.6248 8.89296C8.23248 9.06576 8.32624 9.77744 8.02608 9.2344C7.83664 9.14608 8.12336 8.36464 8.25232 8.29616L8.3016 8.2792ZM6.37296 8.27984C6.37008 8.4184 6.41488 8.28944 6.37296 8.27984V8.27984ZM29.5205 8.33296C29.4648 8.38736 29.5333 8.35472 29.5205 8.33296V8.33296ZM6.396 8.4104C6.10352 8.6184 6.61424 8.63888 6.396 8.4104V8.4104ZM16.565 8.72496C14.82 8.73709 13.1262 9.31591 11.7387 10.3742C8.18992 13.0766 7.49936 18.171 10.2018 21.7198C12.7314 25.0418 17.3506 25.843 20.8418 23.716L21.5086 24.5918C21.3774 24.8971 21.3896 25.189 21.5422 25.3899L26.3806 31.7435C26.6686 32.1214 27.364 32.0763 27.9336 31.6424C28.5032 31.2088 28.7314 30.5506 28.4437 30.1723L23.6053 23.8187C23.4523 23.6178 23.1742 23.5282 22.845 23.5736L22.1781 22.6981C25.157 19.8981 25.6136 15.2325 23.0843 11.9106C21.733 10.1362 19.7835 9.07696 17.7285 8.79856C17.3429 8.74636 16.9541 8.72177 16.565 8.72496ZM7.48048 9.52752C7.68048 10.0024 8.45296 9.72368 8.15056 10.371C8.4872 10.6878 8.09712 11.8046 7.96624 10.853C7.12848 10.8488 6.72848 10.013 7.43184 9.57424L7.48048 9.52752ZM8.2104 9.60624C7.8072 9.72752 8.4664 9.82384 8.2104 9.60624V9.60624ZM28.3154 10.1912C28.3378 10.1752 28.3934 10.2901 28.3154 10.1912V10.1912ZM16.8872 10.5179C17.8158 10.5533 18.725 10.7944 19.5492 11.2239C20.3733 11.6533 21.0919 12.2603 21.653 13.0011C22.1556 13.6583 22.5236 14.4083 22.7356 15.2081C22.9477 16.0078 22.9997 16.8416 22.8887 17.6615C22.7776 18.4814 22.5058 19.2713 22.0887 19.9859C21.6716 20.7005 21.1174 21.3256 20.4581 21.8254C19.8009 22.3282 19.0509 22.6961 18.2511 22.9082C17.4513 23.1203 16.6175 23.1723 15.7975 23.0613C14.9776 22.9503 14.1876 22.6784 13.473 22.2613C12.7585 21.8441 12.1333 21.29 11.6334 20.6306C11.1308 19.9734 10.7629 19.2233 10.5509 18.4236C10.3388 17.6238 10.2868 16.79 10.3979 15.9701C10.509 15.1502 10.7809 14.3603 11.198 13.6457C11.6151 12.9312 12.1693 12.3061 12.8286 11.8062C13.99 10.917 15.4256 10.4613 16.8872 10.5179ZM29.2354 10.8475C28.733 11.2632 29.8386 11.187 29.2354 10.8475V10.8475ZM29.8338 11.1938C29.2776 11.4654 30.3198 11.4658 29.8338 11.1938V11.1938ZM30.196 11.3205C29.7 11.7333 30.7016 11.5163 30.196 11.3205V11.3205ZM30.1762 11.4101C30.1592 11.4392 30.2037 11.4098 30.1762 11.4101V11.4101ZM30.2235 11.4616C30.1835 11.4667 30.2386 11.4859 30.2235 11.4616V11.4616ZM16.675 11.795C15.9755 11.7826 15.285 11.939 14.6482 12.22C14.6814 12.2606 14.7291 12.2997 14.7989 12.3349C14.1589 12.1269 13.9726 12.9355 14.2421 13.2994L14.675 13.3349L15.037 13.1755C15.2709 12.9323 15.3291 12.9742 15.4046 12.6059L15.5458 12.6242L15.6578 12.5774L15.9128 12.7035C16.2187 12.8232 16.2331 13.0811 16.1307 13.1566C15.9858 13.2459 16.1566 13.259 16.1707 13.3144C16.243 13.2936 16.2853 13.2312 16.3307 13.1979L16.4126 13.1685C16.7115 12.9723 16.5029 12.9077 16.2952 12.643L16.4053 12.6712C16.5662 12.8536 16.661 13.06 16.7563 13.2792C16.7672 13.2878 16.7771 13.299 16.7896 13.3029C16.8619 13.3269 16.964 13.3189 17.0514 13.2949C17.1378 13.2712 17.1435 13.1064 17.1288 12.9486C17.252 13.5106 18.4603 13.3435 17.7413 13.6862C17.3269 13.6955 16.6683 13.4683 16.547 13.7554C16.2789 13.6338 16.1419 13.5541 16.0875 13.4917C15.9224 13.4296 15.4472 13.2498 15.4302 13.2498C15.4101 13.2498 14.8053 13.3598 14.8053 13.3598L14.3061 13.5493C14.1438 14.0722 13.8878 13.7925 13.8008 14.1979C13.7326 14.4571 13.1461 15.0171 13.4533 15.4581C13.7275 16.7336 15.3176 15.8843 15.6882 16.4968C15.5141 16.8741 16.3752 17.5918 15.8933 18.2098C16.1205 19.1074 16.731 20.6078 17.7134 19.3304C17.9726 18.5656 18.5307 18.1522 18.5109 17.3934C18.2142 16.6462 19.9605 16.0923 19.2619 15.4872C19.0946 15.507 19.0754 15.5432 18.9426 15.5874C18.6635 15.5768 18.5915 15.3518 18.4965 15.2104C18.4239 15.1072 18.3597 14.9984 18.3045 14.885C18.4821 15.1602 18.6654 15.3938 18.9227 15.5374C19.3678 15.4376 19.8782 15.1083 20.0859 14.8667C20.0808 13.925 21.3467 14.9019 21.3211 15.6098C21.3995 15.8005 21.499 15.933 21.5989 16.0104C21.5279 15.5577 21.3928 15.1174 21.1976 14.7029C20.8427 13.924 20.2744 13.2552 19.5838 12.7547C19.571 12.7746 19.539 12.7758 19.5454 12.7278C19.4521 12.6617 19.3565 12.5986 19.259 12.5387C19.2696 12.5832 19.2824 12.6283 19.2971 12.6741C19.2552 12.6117 19.211 12.5483 19.1746 12.4872C18.4206 12.043 17.556 11.7883 16.6754 11.7947L16.675 11.795ZM27.0869 11.8373C27.3189 12.4984 26.2798 14.0306 26.1288 13.0248C26.2354 12.5275 27.0882 12.6024 27.0869 11.8373ZM7.60688 12.0117C7.59952 12.0357 7.6536 12.0062 7.60688 12.0117V12.0117ZM8.1 12.2443C7.98736 12.3026 8.19312 12.3218 8.1 12.2443V12.2443ZM17.709 12.2654C17.9672 12.483 18.7595 12.771 17.9208 12.5413C17.4843 12.7406 17.3493 12.613 17.709 12.2654ZM15.7128 12.6526C15.6565 12.6699 15.7042 12.7867 15.669 12.8235C15.909 12.941 15.7746 12.7125 15.8101 12.675C15.7614 12.652 15.7314 12.6466 15.7128 12.6526ZM19.3714 12.891C19.4456 13.084 19.4949 13.2072 19.3042 12.9678C19.3199 12.9602 19.334 12.9494 19.3455 12.9362C19.3571 12.9231 19.3659 12.9077 19.3714 12.891ZM15.7352 12.915C15.6411 12.9048 15.5912 12.9678 15.5909 13.0558C15.8389 13.1906 15.8133 12.9682 15.8437 12.9512C15.8099 12.9326 15.7734 12.9203 15.7352 12.915ZM19.5669 14.2856C19.7083 14.2914 19.4315 14.4904 19.4789 14.2968C19.5182 14.2882 19.5467 14.2846 19.5669 14.2856ZM29.3144 15.5374C28.8536 16.027 29.8635 16.1131 29.3144 15.5374V15.5374ZM29.2824 15.6136C29.2738 15.6462 29.3298 15.6085 29.2824 15.6136V15.6136ZM29.3221 15.6837C29.2741 15.6757 29.3266 15.7166 29.3221 15.6837V15.6837ZM29.6571 15.7477C29.2107 16.1362 30.196 15.9947 29.6571 15.7477V15.7477ZM29.7051 15.8581C29.6987 15.9051 29.739 15.8523 29.7051 15.8581V15.8581ZM29.6421 15.875C29.6162 15.8974 29.6715 15.9147 29.6421 15.875V15.875ZM25.995 16.3781C26.003 16.5778 26.0046 16.7771 26.0002 16.9765C26.3672 17.035 26.827 17.0184 26.8357 17.4245C27.4936 17.453 26.7678 18.4139 26.7438 17.5243C26.4758 17.4857 26.2024 17.532 25.9621 17.6568C25.8953 18.3551 25.7524 19.044 25.5358 19.7112C26.0734 19.5406 26.6219 19.5573 26.9458 20.0798C27.7986 20.0766 27.0731 20.6581 27.6776 20.7768C27.9352 20.2507 27.5419 20.317 28.0251 19.8882C28.4939 19.2888 28.187 18.5147 27.7195 18.1874C27.6222 17.8168 27.2347 17.6165 27.4171 17.3637C27.7723 17.8453 28.2757 17.4846 27.8555 17.2242C28.1656 16.9346 29.2734 17.9704 28.6514 17.1736C28.3442 17.1166 27.9221 16.4814 27.8264 16.8904C27.7989 17.2296 26.9525 16.3755 26.6402 16.725C26.5499 16.4101 26.1083 16.6002 26.0834 16.7406C26.219 16.5294 26.1336 16.4203 25.995 16.3781ZM27.6232 16.6517C27.1646 16.9122 28.0373 16.9032 27.6232 16.6517V16.6517ZM15.644 16.6741C15.6334 16.6878 15.6808 16.7573 15.644 16.6741V16.6741ZM11.627 16.7131C11.6175 17.1575 11.6669 17.6011 11.7739 18.0325C12.1419 17.475 12.1275 16.9515 11.627 16.7131ZM27.5995 16.7285C27.5656 16.7362 27.627 16.7483 27.5995 16.7285V16.7285ZM27.9096 16.7669C27.7598 16.8725 28.059 16.8725 27.9096 16.7669V16.7669ZM27.9096 16.7701C27.7733 16.868 28.0456 16.868 27.9096 16.7701V16.7701ZM27.6302 16.7979C27.5829 16.7922 27.6354 16.8302 27.6302 16.7979V16.7979ZM25.9976 17.1454C25.9944 17.2222 25.9877 17.299 25.9826 17.3758C26.0859 17.2594 26.1307 17.139 25.9976 17.1454ZM18.7038 17.4773C18.3339 17.6805 19.0997 17.7733 18.7797 17.5349L18.7659 17.5006L18.7038 17.4773ZM19.1365 17.5342C18.771 17.7627 18.204 18.852 18.9902 18.8862C19.1797 18.661 19.66 17.6565 19.1365 17.5342ZM29.0488 18.228C28.756 18.8056 29.899 18.5746 29.0488 18.228V18.228ZM19.7221 18.3048C19.2466 18.6238 20.1832 18.5835 19.7221 18.3048V18.3048ZM29.812 19.6219C30.0827 20.2347 29.1848 20.6018 29.2526 21.1707C29.7134 21.3928 29.9512 20.557 30.2757 20.3013C30.6594 19.9659 29.9736 19.8667 29.812 19.6219ZM8.52944 21.5067C8.58192 21.844 8.74 22.1704 9.02224 22.2699C8.84577 22.0236 8.68131 21.7689 8.52944 21.5067Z"
                fill="#5C5F5F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2141_1462">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-gray-inactive font-Cabin">About country</div>
        </div>

        <div className="flex flex-col items-center p-[2.5rem] gap-[0.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.61802 4.61802C2.66602 6.57268 2.66602 9.71402 2.66602 15.9993C2.66602 22.2847 2.66602 25.4273 4.61802 27.3793C6.57268 29.3327 9.71402 29.3327 15.9993 29.3327C22.2847 29.3327 25.4273 29.3327 27.3793 27.3793C29.3327 25.4287 29.3327 22.2847 29.3327 15.9993C29.3327 9.71402 29.3327 6.57135 27.3793 4.61802C25.4287 2.66602 22.2847 2.66602 15.9993 2.66602C9.71402 2.66602 6.57135 2.66602 4.61802 4.61802ZM14.058 10.022C14.1485 9.92685 14.2194 9.81479 14.2666 9.69222C14.3139 9.56966 14.3365 9.439 14.3332 9.3077C14.3299 9.1764 14.3008 9.04703 14.2475 8.92697C14.1942 8.80692 14.1178 8.69854 14.0227 8.60802C13.9275 8.51749 13.8155 8.4466 13.6929 8.39938C13.5703 8.35216 13.4397 8.32955 13.3084 8.33283C13.1771 8.33611 13.0477 8.36522 12.9276 8.4185C12.8076 8.47178 12.6992 8.54818 12.6087 8.64335L9.52335 11.8833L8.72335 11.0433C8.6338 10.9444 8.52536 10.8644 8.4044 10.808C8.28344 10.7516 8.15242 10.72 8.01906 10.715C7.88569 10.71 7.75268 10.7318 7.62787 10.7791C7.50305 10.8263 7.38895 10.8981 7.2923 10.9901C7.19565 11.0821 7.11839 11.1925 7.06509 11.3149C7.01178 11.4372 6.98351 11.569 6.98193 11.7025C6.98035 11.8359 7.00549 11.9683 7.05589 12.0919C7.10628 12.2155 7.1809 12.3277 7.27535 12.422L8.79935 14.022C8.89274 14.12 9.00507 14.1981 9.12952 14.2514C9.25397 14.3047 9.38796 14.3322 9.52335 14.3322C9.65874 14.3322 9.79273 14.3047 9.91718 14.2514C10.0416 14.1981 10.154 14.12 10.2473 14.022L14.058 10.022ZM17.3327 10.9993C17.0675 10.9993 16.8131 11.1047 16.6256 11.2922C16.438 11.4798 16.3327 11.7341 16.3327 11.9993C16.3327 12.2646 16.438 12.5189 16.6256 12.7065C16.8131 12.894 17.0675 12.9993 17.3327 12.9993H23.9993C24.2646 12.9993 24.5189 12.894 24.7065 12.7065C24.894 12.5189 24.9993 12.2646 24.9993 11.9993C24.9993 11.7341 24.894 11.4798 24.7065 11.2922C24.5189 11.1047 24.2646 10.9993 23.9993 10.9993H17.3327ZM14.0567 19.3553C14.1511 19.2611 14.2257 19.1488 14.2761 19.0252C14.3265 18.9017 14.3517 18.7693 14.3501 18.6358C14.3485 18.5024 14.3202 18.3706 14.2669 18.2482C14.2136 18.1259 14.1364 18.0154 14.0397 17.9234C13.9431 17.8314 13.829 17.7596 13.7042 17.7124C13.5793 17.6652 13.4463 17.6434 13.313 17.6483C13.1796 17.6533 13.0486 17.6849 12.9276 17.7413C12.8067 17.7977 12.6982 17.8777 12.6087 17.9767L9.52335 21.2167L8.72335 20.3767C8.6338 20.2777 8.52536 20.1977 8.4044 20.1413C8.28344 20.0849 8.15242 20.0533 8.01906 20.0483C7.88569 20.0434 7.75268 20.0652 7.62787 20.1124C7.50305 20.1596 7.38895 20.2314 7.2923 20.3234C7.19565 20.4154 7.11839 20.5259 7.06509 20.6482C7.01178 20.7706 6.98351 20.9024 6.98193 21.0358C6.98035 21.1693 7.00549 21.3017 7.05589 21.4252C7.10628 21.5488 7.1809 21.6611 7.27535 21.7553L8.79935 23.3553C8.89274 23.4534 9.00507 23.5314 9.12952 23.5847C9.25397 23.6381 9.38796 23.6655 9.52335 23.6655C9.65874 23.6655 9.79273 23.6381 9.91718 23.5847C10.0416 23.5314 10.154 23.4534 10.2473 23.3553L14.0567 19.3553ZM17.3327 20.3327C17.0675 20.3327 16.8131 20.438 16.6256 20.6256C16.438 20.8131 16.3327 21.0675 16.3327 21.3327C16.3327 21.5979 16.438 21.8523 16.6256 22.0398C16.8131 22.2273 17.0675 22.3327 17.3327 22.3327H23.9993C24.2646 22.3327 24.5189 22.2273 24.7065 22.0398C24.894 21.8523 24.9993 21.5979 24.9993 21.3327C24.9993 21.0675 24.894 20.8131 24.7065 20.6256C24.5189 20.438 24.2646 20.3327 23.9993 20.3327H17.3327Z"
              fill="#5C5F5F"
            />
          </svg>
          <div className="text-gray-inactive font-Cabin">Travel checklist</div>
        </div>

        <div className="flex flex-col items-center p-[2.5rem] gap-[0.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="32"
            viewBox="0 0 26 32"
            fill="none"
          >
            <path
              d="M18.7151 3.42773H22.1437C22.7499 3.42773 23.3313 3.66855 23.7599 4.0972C24.1886 4.52586 24.4294 5.10724 24.4294 5.71345V28.5706C24.4294 29.1768 24.1886 29.7582 23.7599 30.1868C23.3313 30.6155 22.7499 30.8563 22.1437 30.8563H3.85798C3.25177 30.8563 2.67039 30.6155 2.24174 30.1868C1.81308 29.7582 1.57227 29.1768 1.57227 28.5706V5.71345C1.57227 5.10724 1.81308 4.52586 2.24174 4.0972C2.67039 3.66855 3.25177 3.42773 3.85798 3.42773H7.28655"
              stroke="#5C5F5F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.43 1.14258H9.57282C8.31046 1.14258 7.28711 2.16593 7.28711 3.42829V4.57115C7.28711 5.83352 8.31046 6.85686 9.57282 6.85686H16.43C17.6923 6.85686 18.7157 5.83352 18.7157 4.57115V3.42829C18.7157 2.16593 17.6923 1.14258 16.43 1.14258Z"
              stroke="#5C5F5F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.28711 19.4291L11.8585 22.8577L17.5728 13.7148"
              stroke="#5C5F5F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="text-gray-inactive font-Cabin">
            Things to remember
          </div>
        </div>

        <div className="flex flex-col items-center p-[2.5rem] gap-[0.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_2141_1477)">
              <path
                d="M15.9996 1.77734C13.1867 1.77734 10.437 2.61146 8.09813 4.17422C5.7593 5.73698 3.9364 7.95819 2.85995 10.557C1.78351 13.1557 1.50186 16.0153 2.05063 18.7742C2.59939 21.533 3.95393 24.0672 5.94294 26.0562C7.93196 28.0452 10.4661 29.3997 13.225 29.9485C15.9838 30.4973 18.8434 30.2156 21.4422 29.1392C24.041 28.0627 26.2622 26.2398 27.8249 23.901C29.3877 21.5622 30.2218 18.8125 30.2218 15.9996C30.2218 12.2276 28.7234 8.61012 26.0562 5.94294C23.389 3.27575 19.7715 1.77734 15.9996 1.77734ZM22.7996 20.9685C21.9107 23.6351 19.5907 24.3818 17.5551 24.524V26.3018C17.5551 26.5965 17.4381 26.8791 17.2297 27.0875C17.0213 27.2958 16.7387 27.4129 16.444 27.4129C16.1493 27.4129 15.8667 27.2958 15.6583 27.0875C15.45 26.8791 15.3329 26.5965 15.3329 26.3018V24.524C13.2917 24.3326 11.3556 23.5303 9.77735 22.2218C9.67054 22.122 9.58444 22.0021 9.52395 21.869C9.46347 21.736 9.42979 21.5923 9.42484 21.4462C9.41988 21.3001 9.44376 21.1544 9.49509 21.0176C9.54642 20.8807 9.62421 20.7553 9.72402 20.6485C9.82382 20.5416 9.94369 20.4555 10.0768 20.3951C10.2098 20.3346 10.3535 20.3009 10.4996 20.2959C10.6457 20.291 10.7914 20.3149 10.9282 20.3662C11.0651 20.4175 11.1905 20.4953 11.2973 20.5951C12.4607 21.5319 13.8604 22.1287 15.3418 22.3196V16.7373C14.1613 16.5555 13.0319 16.1285 12.0262 15.484C11.1809 14.9538 10.5481 14.1441 10.2379 13.1957C9.92771 12.2473 9.95976 11.2201 10.3285 10.2929C10.8529 8.95068 12.4796 7.42179 15.3418 7.1729V5.55512C15.3418 5.26044 15.4589 4.97782 15.6672 4.76945C15.8756 4.56107 16.1582 4.44401 16.4529 4.44401C16.7476 4.44401 17.0302 4.56107 17.2386 4.76945C17.447 4.97782 17.564 5.26044 17.564 5.55512V7.20845C19.1529 7.38448 20.6613 8.00014 21.9196 8.98623C22.094 9.19142 22.1879 9.45297 22.1839 9.72223C22.18 9.99149 22.0783 10.2501 21.8979 10.4501C21.7175 10.65 21.4707 10.7777 21.2033 10.8093C20.9358 10.8408 20.666 10.7742 20.444 10.6218C19.5953 10.0011 18.6057 9.60093 17.564 9.45734V14.9062C18.0973 15.0218 18.6662 15.1462 19.2618 15.3329C19.9507 15.5047 20.5971 15.8157 21.1612 16.2468C21.7253 16.6779 22.1952 17.22 22.5418 17.8396C23.0368 18.8078 23.1295 19.9323 22.7996 20.9685Z"
                fill="#5C5F5F"
              />
              <path
                d="M18.5947 17.4581C18.2391 17.3514 17.8925 17.2625 17.5547 17.1914V22.3114C19.3325 22.1336 20.2836 21.5114 20.6925 20.267C20.8288 19.7989 20.7811 19.2965 20.5591 18.8625C20.3422 18.509 20.0566 18.2025 19.7192 17.9613C19.3818 17.7201 18.9994 17.549 18.5947 17.4581Z"
                fill="#5C5F5F"
              />
              <path
                d="M12.3907 11.0925C12.2052 11.5533 12.1931 12.0658 12.3565 12.5348C12.52 13.0039 12.8479 13.3978 13.2796 13.6436C13.908 14.0463 14.6082 14.3239 15.3418 14.4614V9.37695C13.4751 9.59918 12.6129 10.5236 12.3907 11.0925Z"
                fill="#5C5F5F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2141_1477">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-gray-inactive font-Cabin">
            Financial requirements
          </div>
        </div>

        <div className="flex flex-col items-center p-[2.5rem] gap-[0.5rem] rounded-tr-lgw">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_2141_1484)">
              <path
                d="M16 0C17.4688 0 18.8854 0.1875 20.25 0.5625C21.6146 0.9375 22.8854 1.47917 24.0625 2.1875C25.2396 2.89583 26.3177 3.72917 27.2969 4.6875C28.276 5.64583 29.1146 6.72396 29.8125 7.92188C30.5104 9.11979 31.0469 10.3958 31.4219 11.75C31.7969 13.1042 31.9896 14.5208 32 16C32 17.4688 31.8125 18.8854 31.4375 20.25C31.0625 21.6146 30.5208 22.8854 29.8125 24.0625C29.1042 25.2396 28.2708 26.3177 27.3125 27.2969C26.3542 28.276 25.276 29.1146 24.0781 29.8125C22.8802 30.5104 21.6042 31.0469 20.25 31.4219C18.8958 31.7969 17.4792 31.9896 16 32C14.5312 32 13.1146 31.8125 11.75 31.4375C10.3854 31.0625 9.11458 30.5208 7.9375 29.8125C6.76042 29.1042 5.68229 28.2708 4.70312 27.3125C3.72396 26.3542 2.88542 25.276 2.1875 24.0781C1.48958 22.8802 0.953125 21.6042 0.578125 20.25C0.203125 18.8958 0.0104167 17.4792 0 16C0 14.5312 0.1875 13.1146 0.5625 11.75C0.9375 10.3854 1.47917 9.11458 2.1875 7.9375C2.89583 6.76042 3.72917 5.68229 4.6875 4.70312C5.64583 3.72396 6.72396 2.88542 7.92188 2.1875C9.11979 1.48958 10.3958 0.953125 11.75 0.578125C13.1042 0.203125 14.5208 0.0104167 16 0ZM16 24.3438C16.8021 24.3438 17.5781 24.2344 18.3281 24.0156C19.0781 23.7969 19.7865 23.474 20.4531 23.0469C21.1198 22.6198 21.7135 22.1198 22.2344 21.5469C22.7552 20.974 23.1927 20.3177 23.5469 19.5781L21.1094 18.4219C20.8698 18.9115 20.5729 19.3542 20.2188 19.75C19.8646 20.1458 19.4635 20.4844 19.0156 20.7656C18.5677 21.0469 18.0885 21.2656 17.5781 21.4219C17.0677 21.5781 16.5417 21.6562 16 21.6562C15.25 21.6562 14.5365 21.5104 13.8594 21.2188C13.1823 20.9271 12.5729 20.5208 12.0312 20H14V18H8V24H10V21.7812C10.7812 22.5938 11.6927 23.224 12.7344 23.6719C13.776 24.1198 14.8646 24.3438 16 24.3438ZM24 14V8H22V10.2188C21.2188 9.40625 20.3073 8.77604 19.2656 8.32812C18.224 7.88021 17.1354 7.65625 16 7.65625C15.1979 7.65625 14.4219 7.76562 13.6719 7.98438C12.9219 8.20312 12.2135 8.52604 11.5469 8.95312C10.8802 9.38021 10.2865 9.88021 9.76562 10.4531C9.24479 11.026 8.80729 11.6823 8.45312 12.4219L10.8906 13.5781C11.1198 13.0885 11.4115 12.6458 11.7656 12.25C12.1198 11.8542 12.526 11.5156 12.9844 11.2344C13.4427 10.9531 13.9219 10.7344 14.4219 10.5781C14.9219 10.4219 15.4479 10.3438 16 10.3438C16.75 10.3438 17.4635 10.4896 18.1406 10.7812C18.8177 11.0729 19.4271 11.4792 19.9688 12H18V14H24Z"
                fill="#5C5F5F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2141_1484">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-gray-inactive font-Cabin">
            VISA application status
          </div>
        </div>
      </div>

      <div className="rounded-b-[1.25rem] bg-[white] shadow-2xl">
        <ul className="list-disc text-[#5C5F5F] leading-9 p-[2.5rem] pb-[6.5rem]">
          <li>You must be a citizen of India.</li>
          <li>You must have a valid passport that is valid for at least six months beyond the date of your travel.</li>
          <li>You must have a confirmed return ticket to India.</li>
          <li>You must have proof of the accommodation or hotel reservation.</li>
          <li>You must have sufficient funds to cover the expenses during your stay in Dubai.</li>
        </ul>
      </div>

    </section>
  );
};

export default KnowMore;
