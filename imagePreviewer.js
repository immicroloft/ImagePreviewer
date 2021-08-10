(function() {

// 修改預設樣式，使每張圖片皆獨立佔用一行
const style = document.createElement('style')
style.textContent = 'img.imgur { display: block; }'
document.head.append(style)

// 用於篩選出包含 imgur.com 的網址，並捕捉網址中的獨特辨識符
const filter = /imgur\.com\/([^./]+)/

// 用於儲存符合篩選條件的元素
// key 為辨識符，value 為擁有同辨識符的元素陣列
const map = {}

// 儲存頁面上符合篩選條件的 <a> 元素
for (const node of document.getElementsByTagName('a')) {
	if (!filter.test(node.href))
		continue

	const key = filter.exec(node.href)[1]

	if (map[key])
		map[key].push(node)
	else
		map[key] = [node]
}

// 在符合篩選條件的 <a> 元素底下插入對應的 <img> 元素
for (const [key, nodes] of Object.entries(map))
	for (const node of nodes) {
		const img = document.createElement('img')
		img.src = `https://i.imgur.com/${key}.jpg`
		img.className = 'imgur'

		// 修正本次 Imgur 圖片內嵌失敗的主因
		img.referrerPolicy = 'no-referrer'

		node.after(img)
	}

// 在 PTT 網頁版中，每個 <a> 底下皆會自動生成一個對應的 <iframe>
// 儲存並移除這些無法正常顯示，但仍會佔用版面的 <iframe>
const iframes = []

for (const node of document.getElementsByTagName('iframe'))
	if (filter.test(node.src))
		iframes.push(node.parentNode)

for (const node of iframes)
	node.remove()

})()
