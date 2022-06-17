window.onload = async () => {
  const res = await fetch('/api/message')
  const data = await res.json()
  document.getElementById('app').innerText = data['message']
}
