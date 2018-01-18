export function convertType (type: String): String {
  if (type === 'Photo' || type === 'Animated') {
    type = 'IMAGE'
  } else if (type === 'Video') {
    type = 'VIDEO'
  }
  return type
}
