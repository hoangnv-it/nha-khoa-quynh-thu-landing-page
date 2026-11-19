// Worker trước lớp file tĩnh: chuyển hướng 301 www.nhakhoaquynhthu.com và địa chỉ cũ *.workers.dev
// về https://nhakhoaquynhthu.com (giữ nguyên đường dẫn và tham số). Mọi yêu cầu khác: trả file trong public/
// (vẫn áp dụng public/_headers và trang 404).
// HOST được tools/doi-ten-mien.ps1 tự cập nhật khi đổi tên miền.
const HOST = 'nhakhoaquynhthu.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.' + HOST || url.hostname.endsWith('.workers.dev')) {
      url.protocol = 'https:';
      url.hostname = HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
