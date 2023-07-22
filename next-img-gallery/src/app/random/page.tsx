const Random = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  throw Error('ahi')
  return <div>mah</div>
}
export default Random
