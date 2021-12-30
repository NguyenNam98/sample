export default function handleError(error) {
    if (error.response) {
        if (error.response.status === 403) {
            return ' Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại!';
        }
        if (error.response.status === 400) {
            return error.response?.data.msg || 'Lỗi hệ thống';
            // return error.response.message
        }
        if (error.response.status === 404) {
            return 'Không tìm thấy.';
            // return error.response.message
        } else {
            return 'Lỗi hệ thống. Vui lòng đăng nhập lại!';
        }
    } else {
        // Something happened in setting up the request that triggered an Error
        return 'Lỗi hệ thống';
    }
}
