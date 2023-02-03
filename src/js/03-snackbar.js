function showSnackbar(status, message) {
  return {
    colorClass: `color-${status}`,
    message,
  };
}

showSnackbar('error', 'Something went wrong');
