import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Typography, Button } from "@material-tailwind/react";
import { Select, Table, Input } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const { Search } = Input;
import qs from "qs";
import MovieAddNew from "./MovieAddNew";
import { useEffect, useState } from "react";
import { movieSevice } from "../../../services/MovieService";

const columns = [
  {
    title: "ID",
    dataIndex: "movieID",
    width: 100,
    fixed: "left",
  },
  {
    title: "Name",
    dataIndex: "movieName",
    width: 100,
    fixed: "left",
  },
  {
    title: "Trailer",
    dataIndex: "trailer",
    width: 100,
  },
  {
    title: "Mô tả",
    dataIndex: "summary",
    width: 100,
  },
  {
    title: "Ngày khởi chiếu",
    dataIndex: "releaseDate",
    width: 100,
  },
  {
    title: "Thời lượng phim",
    dataIndex: "duration",
    width: 100,
  },
  {
    title: "Sắp chiếu",
    dataIndex: "commingSoon",
    width: 100,
    key: "commingSoon",
    render: (commingSoon) => <span>{commingSoon ? "Yes" : "No"}</span>,
  },
  {
    title: "Đang chiếu",
    dataIndex: "showNow",
    width: 100,
    key: "showNow",
    render: (showNow) => <span>{showNow ? "Yes" : "No"}</span>,
  },
  {
    title: "Phim hot",
    dataIndex: "hot",
    width: 100,
    key: "hot",
    render: (hot) => <span>{hot ? "Yes" : "No"}</span>,
  },
  {
    title: "Diễn viên",
    dataIndex: "actors",
    width: 100,
  },
  {
    title: "Đạo diễn",
    dataIndex: "directors",
    width: 100,
  },
  {
    title: "Poster",
    dataIndex: "poster",
    width: 100,
  },
  {
    title: "Ảnh",
    dataIndex: "images",
    width: 100,
  },
  {
    title: "Ngôn ngữ",
    dataIndex: "language",
    width: 100,
  },
  {
    title: "Thể loại",
    dataIndex: "genreID",
    width: 100,
  },
  {
    title: "Sửa",
    dataIndex: "sua",
    width: 100,
    render: () => (
      <a>
        <EditIcon></EditIcon>
      </a>
    ),
  },
  {
    title: "Xóa",
    dataIndex: "xoa",
    width: 100,
    render: () => (
      <a>
        <DeleteIcon></DeleteIcon>
      </a>
    ),
  },
];
const getRandomuserParams = (params) => ({
  current: params.pagination?.current,
  pageSize: params.pagination?.pageSize,
});
const MovieManage = () => {
  const [isAddNewModalOpen, setAddNewModalOpen] = useState(false);
  const handleNewMovie = () => {
    setAddNewModalOpen(true);
  };
  const handleCloseModal = () => {
    setAddNewModalOpen(false);
  };
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  // const [filterSearch,setFilterSearch] = useState("");
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    const param = qs.stringify(getRandomuserParams(tableParams));
    movieSevice.getListMovie(param).then((result) => {
      setData(result.data.items);
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: result.data.totalCount,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters) => {
    setTableParams({
      pagination,
      filters,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <Card className="h-full w-full !rounded-none !overflow-visible">
        <CardHeader floated={false} shadow={false} className="rounded-none p-3">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Danh sách phim
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Xem thông tin tất cả các phim
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                Xem tất cả
              </Button>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleNewMovie}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm phim
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Select
              defaultValue="lucy"
              style={{
                width: 288,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
            <div className="w-full md:w-72">
              <Search
                placeholder="Tìm kiếm phim"
                onSearch={onSearch}
                style={{
                  width: 288,
                }}
              />
            </div>
          </div>
        </CardHeader>
        <Table
          columns={columns}
          rowKey={(record) => record.movieID}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
          style={{ padding: 24, maxWidth: 1228 }}
          scroll={{
            x: 1180,
            y: 360,
          }}
        />
      </Card>
      {isAddNewModalOpen && (
        <MovieAddNew
          isOpen={isAddNewModalOpen}
          onClose={handleCloseModal}
        ></MovieAddNew>
      )}
    </>
  );
};
export default MovieManage;
