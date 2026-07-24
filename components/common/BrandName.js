const BrandName = ({ className = "", as: Tag = "span" }) => {
  return (
    <Tag className={`brand-name ${className}`.trim()}>
      <span className='brand-caption'>CodeMade</span>
      <span className='brand-biz'>Biz</span>
    </Tag>
  )
}

export default BrandName
