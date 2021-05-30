import * as React from 'react';

const Arsen = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={76}
      height={76}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z" fill="currentColor" />
        <g clipPath="url(#prefix__clip1)">
          <path
            d="M74.421 78.408c1.933-2.725 5.299-4.809 5.379-8.457a3.586 3.586 0 00-.438-1.173 5.05 5.05 0 00-.787-1.04c-1.33-1.35-3.291-1.952-5.01-2.63-1.995-.786-3.924-1.715-5.976-2.356-2.463-.773-5.018-1.167-7.492-1.887-.863-.252-1.696-.641-2.565-.838-.427-.096-.913-.101-1.354-.205h-.14a2.456 2.456 0 01-1.2-.32c-1.048-.092-2.032-.437-2.319-1.527-.596-2.253 1.653-4.409 2.444-6.321.481-1.159.589-2.427.916-3.63.35-1.283.961-2.464 1.58-3.637 1.224-2.307 2.343-4.67 2.801-7.264a11.328 11.328 0 00-.915-6.847c-1.199-2.595-1.183-4.634-.913-7.442.224-2.353.227-4.842-.901-6.986-.579-1.105-1.25-2.025-1.7-3.203-.45-1.178-1.012-2.154-1.94-3.045-5.476-5.281-12.866-6.51-20.105-5.025-3.837.789-7.954 3.068-10.84 5.696a16.56 16.56 0 00-5.246 9.68c-.31 2.034-.551 4.23.149 6.207.32.925.721 1.823 1.037 2.75.36 1.057.24 1.256-.473 2.018-1.33 1.425-1.314 3.991-1.199 5.816.156 2.114.587 4.2 1.283 6.202.294.869.676 1.784 1.315 2.462.603.641 1.577.69 2.143 1.31.566.62.308 1.666.377 2.463.09 1.005.314 1.994.666 2.94.438 1.189 2.61 3.664 1.524 4.798-1.113 1.167-3.763 1.238-5.218 1.283-2.218.07-4.327.043-6.497.58-2.051.506-4.07 1.005-6.138 1.442-.93.196-1.938.425-2.75.938-.728.458-1.222 1.322-2.04 1.628-.863.321-1.824-.065-2.71.233-.71.24-1.198.745-1.635 1.332-.907 1.22-2.225 2.526-2.284 4.12-.032.927.16 1.865.4 2.8.117.469.244.937.355 1.403.705 3.632 3.18 6.065 5.94 8.216.46.357.929.712 1.39 1.079 3.781 4.612 9.39 3.33 14.682 3.699.508.088 1.016.175 1.526.256 2.543.417 5.093.736 7.71.496.51.043 1.02.08 1.53.107 2.55.14 5.128.064 7.732.075.46.037.922.072 1.383.106.462.034.923.065 1.383.093.555.035 1.11.067 1.651.108 6.892 1.602 13.943 0 20.912-.842.511-.074 1.023-.144 1.535-.21a42.937 42.937 0 014.622-.369 3.45 3.45 0 001.282-.654c.415-.356.747-.8.973-1.298.641-1.282 2.244-2.244 3.015-3.643.335-.468.711-.963 1.15-1.487z"
            fill="#000"
          />
          <path
            d="M5.563 77.007a39.29 39.29 0 006.195 4.388c.038.021.078.039.117.058l.213.06c2.217.486 4.457.86 6.712 1.121 1.48.175 2.965.306 4.452.409h30.356c.69-.11 1.378-.242 2.058-.402 3.686-1.283 7.034-3.323 10.534-5.027a7.436 7.436 0 013.466-.711c.203-.183.403-.368.598-.557 1.946-2.301 3.47-4.923 5.225-7.372-.447-.191-.894-.387-1.338-.586-3.076-1.376-6.126-2.756-9.281-3.947-1.303-.49-1.863-.202-3.196-.144-1.773.075-3.59-.896-5.234-1.462-2.125-.731-4.268-1.417-6.37-2.217a1.59 1.59 0 01-.96-.676 2.22 2.22 0 01-.321-1.132c-.012-.436-.012-.916.149-1.237.961-1.763 2.243-3.366 2.404-5.45.137-1.096.396-2.174.774-3.213.122-.34.252-.676.392-1.008.706-1.542 1.603-3.025 2.462-4.522.289-.5.574-1 .85-1.505 1.291-2.734 3.054-5.78 2.253-8.985-.32-1.122-1.923-.641-2.564-1.443-1.282-1.282.16-3.205.453-4.792.095-.368.16-.743.197-1.122.043-.395.04-.793-.008-1.188a9.38 9.38 0 00-.205-1.636c-.455-2.162-1.602-4.243-2.788-6.16-.143-.32-.29-.64-.444-.948-.154-.308-.321-.622-.481-.927a26.911 26.911 0 00-2.813-3.37c-.437.341-.912.63-1.417.86-1.482.66-3.942.93-5.457.143-.19-.1-.381-.186-.577-.266-.913-.104-1.831-.09-2.76-.117a239.047 239.047 0 00-8.277-.103 6.02 6.02 0 01-1.193 2.637c-1.602 1.997-3.17 4.036-4.466 6.25a21.69 21.69 0 00-1.297 3.28 18.96 18.96 0 00-.3 2.654c.26 3.193 1.066 6.315 1.233 9.52a7.113 7.113 0 01-.396 3.62l-.864 1.603a5.943 5.943 0 01-1.724 1.699 9.815 9.815 0 012.564 1.952c2.646 2.694 4.946 7.052 4.143 10.923a7.192 7.192 0 01-1.297 3.377l-1.264 1.351c-1.443 1.282-3.446 1.704-5.313 1.577-1.264-.085-2.609-.697-3.668-1.534-.744.502-1.516.961-2.311 1.376a18.966 18.966 0 01-3.196 1.256c-2.507.773-5.063 1.332-7.587 2.03-2.148.66-4.306 1.39-6.41 2.232 1.193 1.709 2.563 3.294 3.945 4.85 1.338 1.505 2.614 3.09 4.032 4.533z"
            fill="#fff"
          />
          <path
            d="M55.35 22.962c-.593.25-.84-.06-1.02-.566-.08-.226-.32-.352-.48-.527-.16-.175-.358-.33-.3-.537.19-.681-.17-1.102-.609-1.522a1.168 1.168 0 01-.252-.35 5.229 5.229 0 01-.019-.197c0-.066-.011-.135-.014-.205-.015-.212.138-.4.253-.592a6.443 6.443 0 01-.48-.506c-1.123-1.24-1.576-2.912-1.604-4.55a1.28 1.28 0 00-.44-.18c-.535-.112-1.072.101-1.624.045a.59.59 0 01-.24-.202 1.202 1.202 0 00-.16-.122 1.994 1.994 0 00-.784-.272 2.12 2.12 0 01-1.297-.688.893.893 0 00-.22-.102c-1.043-.178-2.057-.427-2.956-1.03a1.065 1.065 0 00-1.002-.059c-.234.09-.39.32-.203.495.336.321.64.709.97 1.057.081.086.16.171.25.253a.82.82 0 00.187.277c.076.074.164.135.26.181.248.28.729.119 1.05.44-.302.3-.4.578-.368.85.012.09.032.18.058.268a.992.992 0 01.106.26c.025.093.041.189.05.285.018.081.024.164.017.247-.006.099-.02.197-.04.293-.063.084-.128.16-.2.247-.265.274-.585.595-.927.898-.083.07-.16.14-.251.21-.337.279-.68.55-.994.832-.085.069-.17.14-.253.216-.252.226-.495.48-.74.732a1 1 0 01-.38.111c-1.558.115-2.27 1.417-3.29 2.225-.623.493-1.107 1.282-1.69 1.893-1.054 1.122-2.303 2.083-2.734 3.668-.127.468-.583.566-1.027.63-.885.13-1.427.667-1.675 1.507-.083.284-.16.574-.362.79-.345.356-.265.677-.045 1.076.253.461.6.673 1.096.64 1.295-.087 2.186.821 3.23 1.328.438.213.708.713.73 1.27.026.294.124.577.287.823.59 1.002-.093 1.954-.133 2.932 0 .2-.284.31-.505.333-.505.051-.875.332-1.263.633-.85.665-2.48.742-3.147.093a8.328 8.328 0 00-1.226-1c-.895-.588-1.611-1.48-2.82-1.539-.416-.02-.594-.396-.472-.846.152-.568.453-.934 1.08-1.015.468-.059.852-.364.785-.848-.067-.484-.562-.37-.921-.354-.44.021-1.59-.633-1.763-1.02-.098-.222.019-.334.213-.435.885-.46 1.713-.984 2.817-.862.83.091 1.209-.345 1.282-1.1.084-.85-.09-1.058-.961-1.356-1.236-.421-1.253-.16-1.273-1.52 0-.347-.024-.727-.442-.857-.449-.138-.683.138-.89.481-.265.449-.612.77-1.185.841-1.169.146-1.792.914-1.818 2.116-.02 1.074.133 2.167-.32 3.206.008-.561-.233-.845-.802-.78-.02.623-.49.445-.801.398-.87-.126-1.18.287-1.159 1.084a.6.6 0 01.11.287c.107.735.063 1.465.333 2.212.24.67.368 1.57-.46 2.13.115.934 0 1.994.4 2.774.766 1.462.548 3.95 3.302 3.687.146-.015.463.29.463.448.008 1.249.57 2.385.603 3.661a9.077 9.077 0 00.868 3.687c.595 1.26 1.808 2.243 1.959 3.614.226 2.072-2.797 4.379-5.374 4.282a.426.426 0 01-.62-.019c-.734.463-1.54.502-2.348.524.24.574.433 1.166.575 1.771.44 1.82.872 3.642 1.37 5.45.678 2.167 1.488 4.295 2.584 6.283 1.763 3.181 5.449 4.895 8.815 5.813 1.735.48 3.519.76 5.317.837 2.181.086 4.473-.481 6.58.27-.36-.13-.299-4.208-.33-4.686-.099-1.555.142-7.078-2.258-7.13-1.258-.026-2.053-.64-2.054-2.041.006-.845-.048-1.69-.16-2.528-.06-.415-.558-.864-.464-1.18.16-.538.824-.278 1.267-.389.251-.06 1.057 0 .624-.368-1.487-1.283-1.113-3.158-1.496-4.692-.193-.772 1.82-1.776 1.174-3.403-.045-.112.696-.71-.274-.961.914-.481 2.157-.867.258-1.563-.107-.04-.272-.213-.253-.26.882-2.17-1.938-3.114-1.705-5.266.098-.893-.922-2.129-.858-3.366.098-1.903.257-3.802.321-5.706-.01-.669.21-1.32.627-1.843.928-1.166 4.114-1.703 4.768-.765a.754.754 0 001.008.18c.593-.32 1.211-.339 1.85-.347.32 0 .64 0 .871-.288l.018-.285c-.27-.348-.664-.28-1.025-.292-.846-.024-1.692.02-2.538-.026-.233-.01-.526-.01-.564-.32-.039-.311.168-.544.466-.654.148-.055.32-.03.466-.084.815-.303 1.733-.137 2.517-.567-.988-.675-2.103-.335-3.153-.32-.873 0-1.923-.249-2.166-.771-.332-.71-1.084-1.986.538-2.54.266-.089-.135-.371-.197-.541-.468-1.282-3.087-1.388-1.909-3.537.433-.792.641-1.741 1.209-2.405.278-.331.748-.867 1.036-.948.976-.274 1.382-1.523 2.244-1.52 2.084.01 4.206-.494 6.24.38 1.036.446 2.105.898 2.576 1.981.988 2.265 2.005 4.536 2.462 7.126.18-2.016.362-4.034.545-6.052-.095-.098-.205-.194-.298-.159z"
            fill="#C4C3C6"
          />
          <path
            d="M55.416 22.903c-.206.518-.653 1.023-1.162.502-.481-.492-.642-1.247-.82-1.887a19.63 19.63 0 00-.729-2.26c-.258-.62-.67-1.375-1.428-1.407-.418-.02-.838.136-1.242.226-.447.09-.9.155-1.354.192-.457.05-1.237-.53-.892-.766.557-.37-.773-.883-.933-1.06-.096-.108-.113-.225.043-.286.155-.061.33.02.466.067.385.13.726.372 1.122.481.45.128 1.17-.07.986-.667-.106-.344-.404-.575-.654-.816.402.212.822.712 1.33.54.481-.16.133-.732.018-1.035a2.038 2.038 0 01-.106-.801c0-.16-.042-.422-.272-.377-.355.069-.263.673-.492.87-.321.28-.725-.64-.864-.827-.356-.48-.879-.76-1.403-1.011-1.11-.534-2.304-.843-3.394-1.415-.409-.215-.936-.5-1.414-.356-.544.16-.139.712.113.962.883.871 2.11 1.18 3.255 1.534.295.085.583.196.859.333.2.102.513.25.599.48.16.419-.742.568-.99.698a1.112 1.112 0 00-.582 1.237c.11.595.548.879 1.098 1.024.133.036.394.087.357.276-.032.16-1.402.48-1.888.54-1.316.183-2.609.481-3.82 1.034a12.285 12.285 0 00-3.103 2.119c-.941.856-1.863 1.745-2.775 2.632-.425.4-.808.842-1.14 1.322-.321.48-.5 1.032-.78 1.539-.565 1.03-1.801 1.205-2.617 1.973-.666.626-1.106 1.801-.256 2.474.356.253.765.42 1.195.49a7.67 7.67 0 011.592.482 4.176 4.176 0 012.218 2.463 3.867 3.867 0 01-.266 3.227 3.911 3.911 0 01-2.686 1.819c-1.213.22-2.404-.146-3.366-.882-.48-.364-.92-.783-1.442-1.082-.386-.22-.802-.387-1.19-.596-.587-.31-1.639-1.016-1.323-1.833.218-.57 1.067-.642 1.518-.943.16-.106.48-.405.264-.594-.194-.16-.614-.087-.843-.071-.973.07-1.845-.765-1.367-1.763.569-1.18 2.159-.802 3.184-1.074.396-.106.885-.32 1.013-.755.137-.458-.245-.761-.615-.936-.4-.19-.865-.277-1.199-.591-.48-.45-.31-1.08-.46-1.651a.652.652 0 00-.439-.508c-.266-.056-.48.16-.641.354-.16.194-.284.45-.46.65a2.287 2.287 0 01-.686.497c-.494.257-1.006.457-1.383.887-.402.46-.539 1.051-.54 1.65 0 .677.16 1.344.16 2.02 0 .306.015 1.141-.377 1.262-.331.1-.42-.425-.458-.642a7.845 7.845 0 00-.405-1.42c-.481-1.25-.52-2.585-.891-3.866-.372-1.28-.867-2.55-1.077-3.883a11.047 11.047 0 01.171-4.007 14.51 14.51 0 011.3-3.653 14.673 14.673 0 012.176-3.096 16.609 16.609 0 012.885-2.49A24.554 24.554 0 0129.56 8.53a32.65 32.65 0 013.742-1.48c.827-.269 1.636-.602 2.492-.777.664-.134 1.71-.298 2.207.305.127.16.346.548.072.668 1.329.45 2.765.536 4.106.948 1.317.405 2.697.59 3.99 1.069.305.113.653.227.87.48.254.302.05.552-.089.847.23.229.67.069.949.062.404.017.798.136 1.144.345.2.107.596.32.574.588-.032.362-.52.19-.732.282-.287.127-.11.351.081.447.259.116.544.157.824.12.753-.059 1.505-.19 2.225.122.72.313.961.95 1.1 1.688.041.348.161.682.35.978.23.29.49.554.774.79 1.22 1.112 1.326 2.776 1.343 4.328.01.777.11 1.617-.1 2.375a1.81 1.81 0 01-.066.189z"
            fill="#000"
          />
          <path
            d="M55.053 16.955c-.014-.046-.633-.06-.75-.304-.136-.286.063-.666.13-.94.245-.989-.45-1.476-1.282-1.734-1.253-.39-2.582-.452-3.813-.933-.267-.104-.835.15-.75-.377.085-.527.625-.275.984-.28.616 0 1.231.037 1.845-.01-.48.037-1.135-.107-1.625-.16-.577-.058-1.04-.197-1.409-.688-.854-1.128-1.848-1.496-3.159-1.859-1.65-.458-3.205-1.226-4.84-1.745-1.234-.393-2.758.183-3.846-.713.252-.17.542-.113.82-.16.018 0 .728-.283.472-.336-.257-.053-3.29 0-3.29 0-.023-1.176 4.22-.559 4.756-.508 2.733.262 5.404.992 7.985 1.957 3.223 1.21 5.344 3.64 7.716 5.9.941.896-.288 1.872.056 2.89zM52.718 40.558c.768-.454.587-1.082.712-1.832.16-.99.67-.481 1.383-.536 1.282-.086 1.147-2.15 1.273-3.082.078-.588.128-1.934 1.09-1.583.57.208.573.961.549 1.457-.066 1.344-.555 2.779-1.104 4.007-.49 1.086-1.07 2.274-1.81 3.216-.198.254-.527.686-.899.494-.553-.285 0-.737.141-1.042.486-1.045-.588-1.053-1.335-1.1z"
            fill="#C4C3C6"
          />
          <path
            d="M43.14 34.941c.29-.014.58-.046.866-.081.755-.096 1.513-.186 2.265-.302.16-.027.359-.113.532-.081.136.025.207.16.33.216.167.056.343.075.518.056.172-.02.347-.002.512.051.151.063.28.169.43.236.566.25 1.176.588 1.345 1.24.086.342-.446.185-.62.16a3.088 3.088 0 01-.51-.13.94.94 0 01-.423-.185c-.084-.077-.151-.221-.28-.22-.13.002-.191.146-.241.244a3.085 3.085 0 01-.53.76 4.1 4.1 0 00-.254.383 1.33 1.33 0 01-.365.33c-.291.158-.624.221-.952.181a1.901 1.901 0 00-.505.018c-.16.035-.32.114-.494.152-.337.07-.687.043-1.011-.075a8.814 8.814 0 01-.97-.444c-.147-.07-.304-.12-.447-.197a.87.87 0 01-.291-.353 2.061 2.061 0 01-.13-.16.41.41 0 01-.013-.207c.01-.143.109-.196.16-.32.119-.254.061-.552.16-.812a.83.83 0 01.244-.375.725.725 0 01.423-.08c.091.002.172 0 .252-.005zM47.534 34.185c-.141.008-.286.01-.435 0-1.267-.027-2.533-.063-3.8-.077-.365 0-.8-.013-.905-.43a1.168 1.168 0 01.502-1.186c.5-.32 1.168-.22 1.734-.26 1.222-.089 2.564-.403 3.686.275.238.146.44.34.671.498.152.104.39.193.433.39.083.367-.447.46-.696.548a4.241 4.241 0 01-1.19.242z"
            fill="#000"
          />
          <path
            d="M48.748 36.158a.5.5 0 01.177.045c.138.062.35.211.28.391-.12.263-.302.492-.532.668-.444.366-1.011.51-1.534.718a2.796 2.796 0 00-.766.43c-.216.181-.386.417-.618.58-.521.366-1.262.16-1.832.043-.507-.109-1.039-.254-1.419-.626a1.859 1.859 0 01-.447-.736 3.15 3.15 0 01-.115-.453 1.464 1.464 0 01-.054-.37c.017-.161.16-.073.258-.02.134.074.254.17.386.248.28.158.574.287.88.385a4.167 4.167 0 001.897.239 3.42 3.42 0 001.612-.652c.104-.098.218-.183.342-.252.149-.066.31-.016.465-.047.267-.05.451-.254.64-.43a.506.506 0 01.38-.161zM47.676 34.123c-.2-.207.511-.446.603-.584.306-.458-1.334-.69-1.572-.824-.135-.075-.419-.24-.39-.426.03-.186.335-.221.481-.242.609-.085 1.221.086 1.832.03.306-.029.609-.09.915-.13.588-.075 1.55-.226 2.006.273.31.338.182.811-.16 1.072-.48.366-1.178.334-1.74.462-.348.08-.683.205-1.026.304-.208.06-.655.233-.872.119a.367.367 0 01-.077-.054z"
            fill="#C4C3C6"
          />
          <path
            d="M19.49 33.387c.746 1.365.839 2.843.694 4.347-.04.424-.453.23-.711.282-.62-1.545-.297-3.092.017-4.63z"
            fill="#000"
          />
          <path
            d="M45.196 51.498a.814.814 0 01.115.015c.524.133 1.167.816 1.213 1.35.088 1.041-.57.894-1.19.506-.308-.19-1.629-.992-1.429-1.496.106-.262.93-.392 1.29-.375zM53.021 32.597c-.16-1.05.311-3.466 1.082-3.078.537.27.212 1.484.093 1.882-.032.107-.837 1.851-1.043 1.58a.867.867 0 01-.132-.384zM40.915 47.265c-.34-.245-.87.125-.93-.48-.032-.308.144-.427.43-.398.384.038.767.12.886.547.02.072-.253.222-.386.331zM48.459 34.978c-.544-.123-1.283.382-1.59-.493.56.067 1.269-.362 1.59.493zM42.261 35.302a.224.224 0 01.045.055c.104.245.127.516.067.775-.038.101-.29.339-.413.31-.124-.03-.265-.641-.26-.776.008-.244.375-.524.561-.364z"
            fill="#C4C3C6"
          />
          <path
            d="M30.188 52.555c-.051-.505 0-1.007.545-1.193.465-.16.87-.095.998.55.024.123.552.22.843.208 1.876-.067 3.54.315 5.711.435 2.996.165 7.244-.333 7.505 0 .95 1.208-2.728.781-5.605 1.025-1.835.156-5.13 1.238-6.447.124-.372-.32-1.257-1.282-1.816.102-.062.16-.825.143-1.21.028-.604-.185-.55-.767-.524-1.28zM34.858 49.67c-.51-.802-1.32-1.573-1.432-2.427-.098-.744 1.003-1.122 1.73-1.137 1.217-.022 2.047 1.17 2.055 1.937.01 1.06-1.692.81-2.353 1.627z"
            fill="#000"
          />
          <path
            d="M22.728 40.931a13.89 13.89 0 01-.334-5.83c.105-.592.545-2.426 1.395-1.405.588.707-.436 2.318-.449 3.111-.014.768.16 1.558-.016 2.31-.148.643-.569 1.122-.596 1.814z"
            fill="#fff"
          />
          <path
            d="M33.714 60.569c.664 1.452 2.45.458 3.314 1.69.16.23.54.408.308.68-.16.181-.64.306-.83.197-1.023-.604-2.391-.378-3.24-1.377-.19-.224-.663-.32-.453-.71.1-.192.448-.251.901-.48z"
            fill="#000"
          />
          <path
            d="M27.247 35.865c.388-.15.61-.32.706-.257.218.127.373.36.552.552-.109.091-.26.282-.32.256a7.97 7.97 0 01-.938-.551z"
            fill="#C4C3C6"
          />
          <path
            d="M48.704 36.152c.005.01.009.02.01.032.044.195-.254.45-.376.569a1.785 1.785 0 01-.551.415.247.247 0 01-.311-.05.615.615 0 01-.072-.49c.067-.21.227-.382.32-.579.061-.12.074-.332.22-.388.184-.069.268.194.378.284.11.09.32.1.382.207z"
            fill="#fff"
          />
          <path
            d="M44.4 36.015c0 .077-.081.141-.124.196a1.794 1.794 0 01-.195.256.557.557 0 01-.298-.392.616.616 0 01.16-.396c.145-.16.21.019.308.13.05.056.148.117.153.198l-.004.008z"
            fill="#C4C3C6"
          />
          <path
            d="M47.789 15.014c.46-.212 1.575.085 1.884.131.539.08 1.169.023 1.666.271-.496.693-1.725 1.095-2.547 1.007a1.373 1.373 0 01-1.103-.757c-.182-.362-.105-.558.1-.652z"
            fill="#fff"
          />
          <path
            d="M16.314 74.77c.843 2.692 1.923 5.308 3.008 7.92 1.138.127 2.277.234 3.419.32-1.863-5.163-3.687-10.382-5.576-15.697-.692-1.712-2.287-1.034-3.643-1.029-.048 0-.221.386-.16.497 1.39 2.511 2.104 5.281 2.952 7.99zM8.08 76.116a65.74 65.74 0 001.358 3.846c.758.505 1.534.988 2.324 1.443.039.02.079.038.117.058l.213.059c.502.112 1.007.216 1.512.32-1.552-4.342-3.085-8.725-4.672-13.176-.692-1.73-2.287-1.045-3.643-1.045-.048 0-.221.388-.16.497 1.39 2.514 2.104 5.286 2.952 7.998zM53.25 83.096c1.1-2.648 2.196-5.299 3.045-8.027.85-2.728 1.58-5.54 2.988-8.086.06-.11-.114-.505-.16-.503-1.372 0-2.985-.691-3.686 1.041-1.924 5.39-3.767 10.683-5.658 15.921a41.1 41.1 0 003.471-.346zM64.307 78.568c.11-.32.216-.653.32-.981.86-2.74 1.58-5.54 2.988-8.086.06-.112-.114-.507-.16-.503-1.372 0-2.986-.691-3.686 1.041-1.295 3.63-2.555 7.213-3.816 10.771 1.463-.718 2.904-1.489 4.354-2.242z"
            fill="#C4C3C6"
          />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z" fill="#fff" />
        </clipPath>
        <clipPath id="prefix__clip1">
          <path fill="#fff" transform="translate(-4.75 3.99)" d="M0 0h84.55v83.6H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Arsen;