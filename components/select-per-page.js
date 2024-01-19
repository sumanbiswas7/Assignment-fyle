export function SelectPageCount() {
  return `
  <select class="select_count" name="page_count" id="pagecount">
    <option value="10">10 per page</option>
    <option value="25">25 per page</option>
    <option value="50">50 per page</option>
    <option value="100">100 per page</option>
   </select>
    `;
}
