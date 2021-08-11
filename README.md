# Image Previewer

搜尋頁面中來自 Imgur 的圖片連結，並自動插入實際的圖片。

## 簡介

PTT [官方網頁版](https://www.ptt.cc/bbs/index.html) 原本內建圖片預覽功能。當頁面中出現如 [Imgur](https://imgur.com) 等知名圖床的網址時，便會自動將網址轉換為超連結，並在下方插入內嵌的預覽框。然而，由於 Imgur 官方政策的變更，導致預覽框在近期 (2021/08) 皆無法正常運作。

在 PTT 官方修正此問題前，本腳本可作為一個暫時的替代方案。其特色為不需要安裝任何擴充功能，僅使用瀏覽器本身的書籤。當不再需要時，只需要將該書籤刪除即可。

## 使用方式

1. 複製 [imagePreviewer.min.js](imagePreviewer.min.js) 中的全部內容。
2. 在瀏覽器上新增一個書籤，名稱欄位可自由命名，網址欄位則貼上剛才複製的內容。
3. 當 PTT 官方網頁版的圖片預覽窗出現問題時，按一下該書籤即會自動修正該頁面。

## 瀏覽器支援程度

- Chrome 54+
- Edge 79+
- Firefox 51+
- Opera 41+
- Safari 14+

上述皆為電腦版，版號推論自 [MDN](https://developer.mozilla.org) 在各 API 項目中所提供的相容表。實際測試過的只有 Windows 10 2004 下的 Chrome 92、Firefox 90、Firefox 91 與 Firefox 92 (Dev)。

## 其他

- 腳本的啟動機制？

  腳本透過瀏覽器的 Bookmarklet 功能來運行，詳情可參考 [Wiki](https://en.wikipedia.org/wiki/Bookmarklet)。

- 腳本做了哪些事？

  原始碼可參考 [imagePreviewer.js](imagePreviewer.js)。實際使用的 [imagePreviewer.min.js](imagePreviewer.min.js) 僅進行 minify 來縮減字數，以及加上前綴 `javascript:` 使其可以透過 Bookmarklet 運行。

- 腳本只會顯示來自 Imgur 的圖嗎？

  目前來說，是的。畢竟只是作為等待 PTT 官方修正前的替代方案，有可能兩週後就失去其用途了。

- 可以用在其他網頁上嗎？

  如果該網頁上有來自 Imgur 的超連結，**理論上**也可以運行。然而，為了維持輕巧 (畢竟要塞進一行網址裡)，腳本本身沒有加太多防呆機制，所以有可能會遇到 bug 或是破壞原本的頁面排版。
