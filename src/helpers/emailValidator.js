export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return 'E-posta boş bırakılamaz.';
  if (!re.test(email))
    return 'Hata! Lütfen geçerli bir e-posta adresi giriniz.';
  return '';
}
