export function usernameValidator(username) {
  if (!username) return 'Kullanıcı adı boş bırakılamaz.';
  if (username.length < 5) return 'Kullanıcı adı en az 5 karakter olmalıdır.';
  return '';
}
