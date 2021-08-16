(function() {

// 在 PTT 網頁版中
// 每個 <a> 下方皆會自動生成一個 class 為 richcontent 的預覽框
// 目前 i.imgur.com 的預覽框已可正常顯示
// 僅剩 imgur.com 的預覽框需要修復

// 修改預設樣式，使每張圖片皆獨立佔用一行並置中
const style = document.createElement('style')
style.textContent = `
	img.imgur {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
`
document.head.append(style)

// 用於篩選出包含 /imgur.com/ 但是並非 /imgur.com/a/ 的網址
// 並捕捉網址中的獨特辨識符
const filter = /\/imgur\.com\/(?!a\/)([^./]+)/

// 用於儲存無法正常顯示的預覽框
const containers = []

// 挑出頁面上所有 <a> 元素
for (const node of document.getElementsByTagName('a')) {
	// 篩選網址
	if (!filter.test(node.href))
		continue

	// 檢查 <a> 是否屬於自動生成的一部分
	// 若是，則將整個預覽框加入待移除陣列
	// 若否，則在下方插入圖片
	const container = node.closest('.richcontent')

	if (container)
		containers.push(container)
	else {
		const img = document.createElement('img')
		const key = filter.exec(node.href)[1]
		img.src = `https://i.imgur.com/${key}.jpg`
		img.className = 'imgur'

		// 修正本次 Imgur 圖片內嵌失敗的主因
		img.referrerPolicy = 'no-referrer'

		node.after(img)
	}
}

// 移除無法正常顯示的預覽框
for (const container of containers)
	container.remove()

})()
