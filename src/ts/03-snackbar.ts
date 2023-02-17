interface SnackBar {
  colorClass: string;
  message: string;
}

function showSnackbar(status: string, message: string): SnackBar {
  return {
    colorClass: `color-${status}`,
    message,
  };
}

showSnackbar('error', 'Something went wrong');
showSnackbar('warning', 'Something went wrong');
showSnackbar('info', 'Your action is being processed');
showSnackbar('success', 'Saved successfully');
