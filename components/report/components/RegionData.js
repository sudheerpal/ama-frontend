import React from "react";
import { MapPin } from "lucide-react";
// import MapPin from '@heroicons/react/24/solid/MapPinIcon'

const RegionData = ({ regions }) => {
  const getKeyName = (searchValue = "") => {
    return Object.keys(regions).find((key) =>
      key.toLowerCase().includes(searchValue)
    );
  };
  return (
    <div className="relative">
      {getKeyName("north") && (
        <div
          data-tip={`${getKeyName("north")} : ${regions[getKeyName("north")]}`}
          className="tooltip absolute north_america"
        >
          <MapPin className="h-14 text-secondary" />
        </div>
      )}
      {getKeyName("africa") && (
        <div
          data-tip={`${getKeyName("africa")} : ${
            regions[getKeyName("africa")]
          }`}
          className="tooltip absolute south_africa"
        >
          <MapPin className="h-14 text-secondary" />
        </div>
      )}
      {getKeyName("europ") && (
        <div
          data-tip={`${getKeyName("europ")} : ${regions[getKeyName("europ")]}`}
          className="tooltip absolute europe"
        >
          <MapPin className="h-14 text-secondary" />
        </div>
      )}

      {getKeyName("asia") && (
        <div
          data-tip={`${getKeyName("asia")} : ${regions[getKeyName("asia")]}`}
          className="tooltip absolute asia_pacific"
        >
          <MapPin className="h-14 text-secondary" />
        </div>
      )}

      <div data-tip="Middle East" className="middle_east tooltip absolute">
        <MapPin className="h-14 text-secondary" />
      </div>
      <svg
        enableBackground="new 0 0 783.086 400.649"
        viewBox="0 0 783.086 400.649"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m346.725,131.376-3.377,4.501-2.25,2.251-4.501,2.475-.676,2.026c0,0-1.801,1.801-1.575,2.927s.226,3.151.226,3.151-3.151,2.926-4.502,3.826-3.152,2.926-3.152,2.926-1.125,1.351-1.8,1.801-1.8,1.8-2.701,3.151-1.801,2.25-2.251,2.925c-.45.675-1.801,2.251-2.476,4.727s-2.476,5.402-2.476,5.402l-.451,1.125c.226,3.827.225,4.502.676,5.853s.901.899.45,3.826c-.45,2.925-.45,4.051-.9,5.402s-1.801,3.825-2.25,4.952 .9,3.15.9,3.15 .676,2.927.225,3.602c-.45.676.225,2.026.225,2.026s2.701,1.575 3.602,2.476 2.476,2.251 2.701,2.926 2.026,3.827 2.251,4.502 2.026,3.15 2.476,3.826 2.701,3.152 2.701,3.152 2.926,2.249 3.602,3.15 2.701,1.35 3.375,2.025c.676.675 2.251.449 3.151,1.126s2.701-.451 3.602,0 3.377-.45 4.052-.9c.675-.45 2.25-2.025 3.376-1.351s1.8,0 2.701.225 2.25-.899 3.15-.899 3.151-.901 3.826-.901 2.927-1.352 3.828-1.352 2.025-.898 3.15-.449 .675-.899 2.701-.225 2.701,0 3.376.674c.676.676 1.577.002 2.252.902 .675.899 1.8,1.574 2.025,2.475s1.575,1.802 1.575,1.802l1.351.224c0,0 1.802-1.35 2.251-.449s2.476.676 2.476.676l2.025,2.25 .676.9c0,0 1.351,3.602 1.125,4.952s-.225,4.276-.9,4.951c-.675.676-1.125,3.602-1.125,3.602s-.901.9 1.125,2.701 3.377,3.376 4.052,4.275c.676.901 2.477,3.378 2.7,4.953 .226,1.575.676,2.475 1.577,4.501s2.025,2.251 2.25,4.503 .675,2.251.45,3.825c-.225,1.576-.9,1.801-.225,2.926s1.574,3.152 1.351,3.827c-.225.675-.676,3.601-.676,3.601l-.45,1.351-2.025,3.828-1.351,2.024c-.45,1.575-1.35,3.151-1.125,5.402 .224,2.251-1.125,2.25.675,4.5s2.7,4.728 3.826,6.754c1.126,2.025 1.801,4.051 2.025,5.401 .226,1.351 1.126,1.802 1.576,3.602s.675,2.7.675,3.826-.226,4.052.226,4.727 .675,2.702.9,3.602c.225.901-.676,1.126.675,2.702s2.251,2.475 3.151,3.601 .675.675 1.351,2.251 1.575,2.477 1.801,3.826 .449,4.726 1.125,6.302 1.575,3.152 1.575,3.152 2.477,1.575 3.377,1.35c.899-.225 2.701-2.249 4.052-1.575 1.351.675 2.476,0 3.601,0s2.251-1.351 3.377-1.351 2.7-1.801 3.602-1.35 2.024-.452 3.15-1.577c1.126-1.124 1.801-2.024 3.826-3.825s1.801-1.802 3.151-2.927 2.702-3.602 4.277-4.052 2.025-2.024 2.475-3.15 .675-1.801 1.351-2.702 .225.228 1.351-2.7 2.478-4.051 3.603-4.727 1.8-2.025 2.475-2.251 1.801.675 1.351-1.351c-.449-2.025 0-4.951-.449-5.626s-1.127,1.574-.901-1.803 2.701-6.752 2.701-6.752 3.376-4.276 4.502-4.951 1.35-1.35 2.927-2.251c1.574-.899 4.951-3.15 4.951-4.276s1.351-4.052 1.351-4.728 0-1.35-.449-5.177 .449-2.926-.901-6.527-1.577-8.103-2.476-9.228-.451-4.053-.451-4.952 1.577-3.151 2.252-4.051c.675-.901 3.601-4.503 3.601-4.503s4.501-5.176 6.077-7.651c1.576-2.477 3.151-4.727 4.276-5.627s3.827-2.928 5.402-5.178 4.727-6.526 4.953-7.203c.224-.674 2.024-2.925 2.024-2.925s2.476-2.927 2.927-4.502c.449-1.576 2.699-10.354 2.249-9.904s-3.15.9-4.051,1.125c-.899.226 1.352,1.125-5.177.676s-9.902.675-9.902.675c-2.027-.451-3.602,1.8-4.278-1.351s-1.126-4.951-2.475-7.202-2.252-3.151-4.276-6.078c-2.025-2.925-1.802-1.576-3.603-3.825s-2.251-1.577-3.376-4.502c-1.125-2.926-2.025-1.8-3.376-5.852s-2.251-4.503-2.926-6.753-1.575-2.927-2.026-4.952c-.45-2.026-5.626-12.379-6.302-13.055-.676-.674-1.801-4.277-1.576-3.601 .226.675 3.377,2.926 3.377,2.926s1.8-.676 2.476-.676 3.376,2.477 3.376,3.376 4.729,5.178 5.853,8.329c1.125,3.151 2.478,5.402 2.701,6.302s2.476,4.502 3.377,5.853 3.825,4.051 4.275,5.402 4.728,5.852 4.728,8.778 2.024,6.752 2.25,7.652 4.276,2.027 4.276,2.027l5.403-1.351c0,0 8.102-5.178 9.003-5.178s8.104-3.376 8.104-3.376 2.925-2.7 4.95-4.275 4.277-4.501 4.728-5.853 1.35-1.575 3.15-3.602 4.277-4.051 2.702-5.402-2.477-.9-4.727-3.151-2.026-1.8-3.602-4.727c-1.576-2.925.225-6.302-3.152-2.925s-2.025,4.276-5.402,4.953c-3.375.674-4.727,2.925-6.302.674s-3.15-.9-4.052-4.277-1.576-3.602-1.8-4.951 0-1.351-1.801-4.728-.45-8.553.675-5.627 2.926,3.376 5.853,5.402c2.925,2.025 4.277,3.602 6.977,3.827 2.701.224 4.952,0 5.402.449s.9-.224 2.026.225 1.574-.674 2.025,1.125 2.926,2.026 4.051,3.151 1.126.676 4.053,1.125 6.979.451 6.979.451l4.275-.226 4.952.449c0,0 3.603,2.026 4.502,2.026s1.125,2.477 3.376,3.827 2.701,1.575 4.051,3.151 1.126,2.251 2.926,3.826 4.729-.224 5.179-.898c.448-.676 2.699-1.801 2.251,0s2.249,1.124 1.574,5.402-1.126,3.15 0,6.077 6.077,11.929 6.303,14.63 1.575,1.801 1.8,4.278 1.575,3.375 1.575,5.176 1.577,2.25 1.801,3.602c.227,1.351 2.702.224 3.377,0 .676-.226 3.826-3.152 3.826-3.152s1.353-.449 1.126-2.701 0-1.8 0-5.176-1.35-3.376-.675-6.751 2.475-5.403 2.926-6.978 2.251-4.276 3.15-4.502 5.853-2.7 6.979-4.277 2.926-3.376 4.727-5.176 4.951-4.051 5.627-3.376 .45.45 1.576.45 3.151.901 4.726,1.126c1.576.225 4.728,4.051 5.403,6.077 .675,2.026.225,1.575 2.701,4.502 2.476,2.925 4.727,1.124 4.727,4.726s0,3.376 1.126,4.727 2.475-2.476 3.825-2.025 1.575-.45 2.7,3.151 1.8,3.602 2.027,7.203c.224,3.601-.226.225-.226,3.15 0,2.927-.226,3.152.226,5.852s2.023,3.603 1.8,4.053c0,0 1.35-3.826.899-6.528s0-6.526 1.126-7.651 2.252-2.251 3.151.675c.901,2.925 1.351.675 3.376,4.051 2.027,3.377 3.827,2.7 4.052,4.276s1.353,1.802 2.926,3.151c1.576,1.351 2.926-.224 4.727-1.575s6.752-6.303 6.979-8.329c.224-2.025 2.25-1.576-1.352-6.751s-3.602-6.978-7.428-10.129c-3.824-3.151-6.076-3.376-3.149-7.428s4.277-6.752 6.077-5.626 4.95.899 4.95,5.402-.9,9.453 2.251,4.051 4.728-8.553 3.826-7.651 2.026-1.801 2.026-1.801 .226-2.026 4.053-2.926 4.95-1.351 6.302-2.026c1.35-.676 5.177-5.178 5.852-7.203s2.476-5.627 2.026-7.202-2.702-9.228-3.152-9.004c-.449.226-.224.226-3.149-2.925-2.928-3.151-4.953-5.402-5.403-6.753s-1.576-1.576-.226-3.376 2.027-1.575 2.252-3.151 2.024-2.926-1.352-1.8-.9.451-3.826.226-10.578,1.575-6.751-3.151 4.949-7.652 5.625-7.652 4.053-3.827 4.277-.226c.226,3.601 1.575,2.7 1.801,4.951s4.727-2.475 4.727-2.475 1.575.45 2.7,1.575 1.126,4.727 1.126,4.727-.9-1.126 1.576.675 5.176.9 5.176,4.727 0,4.052 1.576,4.952 3.15.451 4.503-.675 3.6-5.177 3.6-5.177 .225-1.576-3.376-3.827-5.852-3.825-7.201-4.951-.901-4.501.448-5.853 2.026-2.026 1.576-3.826 .676-3.152 4.052-2.927 4.051-.224 4.051-.224 .677.449.677-.901 4.275-7.653 3.149-7.653 .228-1.575-.45-4.051 2.251-6.302-.224-8.103-3.152-2.702-4.727-5.402-1.352-3.151-7.203-3.827-8.553,1.351-9.904-.449-2.025,2.7-2.925-2.702 1.351-9.004 1.351-9.004 3.601-2.25 4.5-3.826 4.501-2.251 7.43-1.125 7.201.9 10.804,1.577c3.601.674 3.376,2.925 5.177,0 1.8-2.928 0-4.277 1.35-5.853s2.926-4.052 4.051-2.477c1.125,1.577 3.379,3.151 5.18,1.125 1.8-2.025 2.475-2.25 2.475-2.25l.898.901c0,0 2.026-1.127 2.026.898 0,2.027 2.027,4.278.901,5.853s-2.7,1.351-2.7,5.177 0,3.152 2.474,6.304c2.477,3.15 4.052.449 4.502,3.826s.899,2.702 3.377,4.952 2.024,2.25 3.826,3.601 2.702,2.702 2.702.451 .225-3.376 0-5.402c-.227-2.025 1.801-3.602.448-6.978s-.224-3.151-2.925-5.627-4.503.451-5.401-3.151 4.275-5.177 5.627-5.627 3.374-3.151 3.824-1.35-3.375,8.328 3.153,1.35 3.601-4.051 3.601-4.051 3.376-.45 4.051,0c.674.451 2.478-2.026 1.8-1.8s-7.2-3.602-7.2-3.602l-4.729-2.7c0,0 1.577-1.126 2.702-.9s1.352-2.251 2.478-2.477 8.777,1.577 10.354,2.477 7.201,1.125 6.525.675-4.275-3.151-4.501-4.052c-.224-.9-8.103-2.701-10.578-2.476-2.477.224-4.726.899-6.752.224s-4.952-2.476-6.528-2.476-21.382-3.826-22.282-3.601-2.252,4.501-2.927,3.826-1.8-.676-4.953-1.576-7.427-1.576-13.055-2.025-9.451.45-11.027-1.351-4.951-1.125-8.778-1.351c-3.826-.224-8.328,0-10.354,0s-6.751-.224-7.877-.45-2.476-1.801-3.826-2.025c-1.352-.226-1.127-.675-3.827-1.125s-2.476-3.376-3.376-.901c-.9,2.477-.451,1.801-1.801,2.701s-2.701,2.701-3.602,2.701-4.5.225-5.177-.225-1.801-.9-4.052-.9-2.251.224-5.177-.226-5.177-.226-7.878-1.575-2.701-2.251-4.952-2.026-2.249-.45-5.402-.45-6.976,1.801-9.003,2.026c-2.024.225-6.526-.226-8.102-.901s-2.026-2.25-7.879-1.576c-5.852.676-9.228.676-8.103-1.125s2.476-3.601 3.151-3.826c.676-.225 2.25-1.35 1.124-1.8-1.124-.451-2.25-1.125-4.95-1.351s-2.478.9-6.528.45 2.251-1.575-6.076-1.35c-8.328.226-10.354.9-11.254.9s-2.027-1.8-4.277.9-5.404,4.276-9.904,4.501-4.727-.45-9.002,1.125-6.979-.45-6.078,3.151 2.026,4.952 2.026,5.627-2.026,5.177-4.501,2.476-6.979-13.28-4.953-6.077c2.025,7.202 6.526,9.679 2.251,10.804s-3.828-.45-4.503-.901c-.674-.45 0-3.601-.225-5.402s-.675-2.926-1.575-3.826-.676-2.251-2.476-2.701-.225-1.351-3.151-1.351-5.401-1.801-4.726,2.251 1.349,1.351 3.149,5.177 5.177,1.125 2.702,3.826c-2.476,2.701-9.003,1.801-10.579.676s-1.125.45-4.053-1.576-2.024-3.602-5.4-2.026-4.502,4.502-5.853,3.376-4.501,1.575-5.627.226-5.628-1.351-6.527,0-3.602,1.125-7.428,2.926-2.702.224-7.428,4.051-7.429,6.977-9.003,4.501c-1.576-2.475-10.13-6.752-6.753-7.428s4.952-2.025 6.753-.45 4.728,1.126 5.176,0 2.477-2.251-.225-3.601-2.926-.451-7.202-2.026c-4.277-1.576 0-1.125-5.853-2.026s-8.329-1.35-9.904-1.8-3.826,0-6.076-.225-3.826-.675-5.853-.45c-2.025.225-3.15-.225-5.852,1.801s-4.728,2.926-6.528,4.501-6.526,4.727-7.877,5.853-6.078,4.726-6.528,6.077 .45,2.476-1.351,3.376-3.601.9-4.952,1.125c-1.351.225 0-2.026-1.351.225s-.9,10.354.225,9.228 .45-4.726 5.402-1.349 8.104,2.925 7.878,6.076 3.376,2.926 3.826,3.602c.45.674 2.701-.901 2.701-.901s4.952-3.151 4.952-4.726 3.151-5.177 3.151-5.177-2.252-1.125-2.252-3.376 .677-2.927 1.126-5.178-2.476.001 4.277-4.277 7.202-1.349 7.202-1.349 .899.9-.226,2.25-3.151,4.953-3.601,5.402 2.026,4.052 3.15,4.052c1.126,0 3.377-.901 4.728-.676 1.351.226 3.601-.674 4.276-.224 .676.45 2.251,1.8 1.125,2.926s-3.602,2.475-5.401,2.026-4.503-3.602-2.927.9-.225,5.627-1.576,5.402c-1.349-.225-4.276-2.475-3.826.901s-2.925,5.626-3.601,5.626-2.025-.225-2.025-.225-2.027-.226-3.151-.226c-1.126,0-3.377,1.125-4.052,2.026-.676.9-1.576.226-2.701.226s0-1.351-2.251-1.801-3.601-.9-4.951,0-3.376,1.35-4.277.675 .451-2.252-1.351-1.35-3.151,3.376-3.826,3.602c-.675.224 2.026,0-.675.224-2.701.226-3.826.902-5.177,1.351s.45,3.151-2.026,4.051-.674-1.125-3.151.9c-2.476,2.027-2.927,3.827-3.826,4.052-.901.226-.675.675-2.701.9-2.026.225-1.8.45-2.927.675s.226.676-2.25.225-4.277.451-3.827,1.351 8.778,3.376 2.476,3.151-4.276.9-2.926,1.8 2.025,1.8 2.701,2.026 1.8,2.927 1.8,2.927 1.801-.226.676,1.35 .45,2.026-.676,4.052-1.125.675-2.025,1.125-2.251,2.026-4.728.675-4.275-2.026-7.202-2.25c-2.926-.226-.901-.675-2.926.899-2.026,1.577-2.476,3.377-2.25,5.402 .225,2.025.45,4.727-.226,6.078s-.675,2.701-.226,4.727c.451,2.025 1.802,2.927 1.802,2.927s3.151.449 3.826.675 2.026-.45 3.826.674c1.801,1.126 3.602,1.577 4.727.226s5.627-2.926 6.979-4.276 2.25-1.8 1.575-3.151 1.351-4.727 2.476-5.402c1.125-.675 3.601-1.351 3.601-1.351l2.701-4.051c0,0 2.251-2.477 3.376-2.251s7.427,2.477 6.978-.449 .45-3.827 1.125-2.702 2.476.675 2.476.675 .9-.449 1.575.226c.675.674 1.575,3.602 2.926,4.276 1.351.676 2.476,1.351 3.377,1.8s1.801,0 3.602,1.576 3.601,2.477 3.825,3.151c.227.675 1.802,2.251 1.802,2.251s1.575.45 1.125,1.351-2.7,3.602-3.826,4.051-4.051-.451-2.926.45c1.124.9 2.701,2.026 3.376,1.35 .676-.675 4.951-5.177 4.951-5.177s-.225.225 0-1.126 0-2.925 1.126-2.25c1.125.676 1.801,1.576 2.251.676s.9-.45-.226-1.125-3.826-4.502-5.177-4.727-4.728-2.477-4.728-2.477-.674-.675-2.25-2.475-2.025-1.351-2.477-2.927-1.801-3.601.676-3.151 4.051,2.025 6.302,3.376 1.802,1.8 3.827,3.151 2.252,2.702 3.826,2.477c1.575-.225 3.377.9 3.377,2.926s.449,4.276.899,4.727 1.8,1.351 2.251,2.251 1.351,3.151 2.025,4.051c.676.9 1.351,1.576 2.026,2.702 .675,1.125.9-.226 1.575.225 .676.45 1.576.224 1.576-.676s.224-2.476.224-2.476 3.153-.9 2.253-1.351-3.603-3.151-3.377-4.051 0-2.7 1.124-2.475c1.126.224 2.252,2.25 4.728.449s5.402-2.701 4.501,0 .227,3.15 0,6.077c-.224,2.927.902,2.026 2.478,3.602s2.7,1.802 3.825,2.251 2.926.226 4.728.451 2.926-.676 4.502-.225c1.574.45 5.176-.226 5.852.225s3.377-.9 3.601.675c.225,1.576 1.126-.225.451,3.376s-1.576,6.077-1.576,6.077c-2.476,4.727-3.376,5.853-4.502,6.078-1.124.225-1.8.9-3.825.675-2.026-.226-4.502,0-7.428-.675s-8.329.675-10.579-.676-5.402-.225-6.754-1.8-3.6-1.351-4.501-2.251-1.35-3.375-1.35.226-2.026,3.826-2.476,5.627 .674.9-1.802.675c-2.476-.226-3.151,1.125-6.752-1.575s-5.402-2.701-7.202-3.827-3.602,2.025-5.402-1.575-4.277-.676-4.502-3.602c-.225-2.927 0-2.7.225-4.501s2.701-3.376 1.576-4.051-.226-1.801-1.801-1.125-3.826.9-5.627,1.575c-1.801.676 4.051,0-4.727.676s-11.255,1.575-11.255,1.575-.675-.45-1.801.45-2.701,2.251-4.276,1.576c-1.575-.676-2.476-.451-3.826-.225s-2.25-1.125-3.826,0c-1.576,1.124-3.376,1.575-4.052,1.124-.677-.456-1.803-2.256-1.803-2.256z"
          fill="#b2b2b2"
        />
        <path
          className="p-24"
          d="m497.305,279.479c-.675,2.477-3.151,6.077-3.151,6.077l-4.503,2.251c0,0-1.573,1.351-2.475,1.576-.9.224-3.151,1.351-3.151,1.351s-2.025-.451-1.351,1.574c.675,2.026.901,4.503.675,5.177-.224.676-.224,2.027-.224,3.828s-.675,4.05-1.801,4.5-2.251.901-2.026,2.477 .226,6.302.226,6.302l2.927,4.502c0,0 .9-.675 2.701-.675s3.601-1.574 3.601-1.574 2.027.448 1.8-2.026c-.225-2.477.902-5.402.675-6.078-.224-.675 2.027-3.602 2.027-4.276 0-.676 2.251-3.825 2.251-4.952s1.575-2.926 1.8-4.275 .45-4.502.9-5.402 .676-1.801.676-2.701 0-2.701 0-2.701l-1.577-4.955z"
          fill="#addf33"
        />
        <path
          d="m673.544,309.866c-.675.899-1.125,10.579-1.575,11.704s-1.351,6.978-.899,8.327 1.124,6.303.675,7.879 .225,6.527-.902,6.302c-1.124-.226-1.573.226-1.573.9 0,.676 1.573,2.025 1.573,2.025s2.703.001 3.828-.225 3.376-1.351 5.177-1.351 2.927-1.351 4.501-1.351c1.576,0 4.953-1.124 5.853-.675s2.25-2.701 3.826-2.025 4.953-1.576 6.528-1.576 2.251-2.477 4.052-2.025 5.177-.9 6.753-.227c1.573.677 4.051-2.25 5.176,0s4.503,3.152 4.503,4.277-.228,3.602-.228,3.602l2.702-.226c0,0 4.275-2.701 4.952-2.701s2.251-2.25 2.251-1.124c0,1.124-1.352,3.602-1.801,4.726-.45,1.126.449,2.477.449,2.477s2.253,1.125 1.352,3.15c-.901,2.026.224,1.577 0,3.151-.226,1.576 0,.9.898,1.8s2.479,2.479 3.828,2.252 1.8-1.575 2.926-.9c1.125.675 3.375.225 4.05,1.126 .678.899-4.275,3.15 4.278-.675s9.451-4.728 10.577-6.079 2.479-2.7 3.377-3.601 .227-.675 2.926-2.701c2.701-2.025 2.701-1.125 5.179-4.952s4.275-5.176 4.727-5.852 1.35-.9 1.575-3.603c.225-2.7 2.025-5.176 2.025-6.076s.675-2.249.45-3.826 .901-3.825-.45-6.076 .675-3.15-1.351-4.053-3.376-.449-3.826-2.025-2.252-1.351-2.927-5.627-3.376-4.728-3.376-4.728-2.701-1.125-2.026-1.574 .901-3.603.677-4.503c-.226-.9-.226-2.926-.9-4.275-.675-1.352-1.126-3.151-1.801-4.728s-1.8-2.026-2.251-3.826-1.126-2.477-1.35-2.926c-.227-.45-.678-2.7-1.126-.226-.45,2.476-1.352,7.202-1.352,7.202s-1.801,3.828-2.476,4.953c-.675,1.124-1.35,4.051-2.475,3.825s-1.803,1.127-2.701.9-2.251.226-2.926-.449-2.476-2.476-3.377-2.702c-.9-.224-1.575-2.024-2.251-2.024s-1.801-1.577-1.575-2.477c.224-.9.449-2.925.675-3.826 .224-.9 1.576-2.927 1.576-2.927s0-1.35-1.126-1.35-1.351,0-3.827-.226-3.149-.45-4.052-.45 .902-.45-1.575.225-3.601,2.477-5.177,4.053c-1.573,1.575-.224,1.124-1.573,1.575s-1.126-1.126-2.027,1.351 .451,3.15-.227,3.601-5.4-1.575-5.4-1.575 1.125-.226.224-1.351-1.8-2.7-3.149-2.025-2.479,1.126-3.377,2.251-.901,2.025-1.576,2.925-2.475.9-2.701,1.801-.225,3.151-.899,3.376c-.675.226-.9-.898-1.575-1.124-.675-.225-.451-2.026-.9-.9s-.9.899-1.575,2.7c-.677,1.801-.901,3.377-1.576,3.602s0,.45-2.027,1.576c-2.024,1.125-2.475,1.125-5.4,2.476-2.925,1.351-2.25,1.351-4.276,1.575-2.025.226-2.477.901-3.827,1.126-1.352.225-2.25.449-3.602,1.8s-2.475,1.8-3.375,2.026-1.805,1.127-1.805,1.127z"
          fill="#b2b2b2"
        />
        <path
          d="m686.823,220.958c-.899,1.352-3.825,5.402-4.95,5.628-1.126.224-2.252,1.351-3.152,1.125s-2.926,0-3.601,2.926-1.801,4.502-2.478,4.276 1.125,4.276-2.7,2.477-2.475,1.576-2.926,2.477 .675,3.376.9,4.276c.227.9.9,2.476 1.801,3.825s1.575,2.926 3.151,2.478 6.526,0 6.526,0 1.803.675 2.927.675c1.125,0 1.351-.45 2.025-.45s2.025-2.252 1.801-2.476c-.225-.227-.899-.901.45-2.252s2.926-1.8 3.152-3.376-.45-1.575.225-2.477 2.25-.673 1.801-1.575 .449-.675-.451-2.477-2.026-2.476-1.126-4.727 1.803-2.701 1.577-4.051 1.125-1.801-.451-3.377c-1.574-1.574-2.25-2.025-3.376-2.477l-1.125-.448z"
          fill="#b2b2b2"
        />
        <path
          d="m730.939,243.467c.902-.225 4.052-2.476 4.278,1.576s.448,2.925 1.801,5.176 2.248,2.928 3.824,1.802 3.376-1.127 3.826-3.151c.451-2.026.451-2.026 1.801-2.026s1.801-.225 2.479.677c.674.898 1.122-.002 4.05,1.574s5.401,1.124 7.204,2.701 2.701,1.352 5.176,2.251 1.35-.45 3.601,2.026 1.353,3.15 2.476,4.276c1.125,1.125 2.027-.901 1.576,1.8s-3.601,0 1.126,3.825 5.402,4.504 6.976,5.628c1.577,1.126 2.702,2.477 1.353,2.477s-5.628,0-6.077-.676-2.476-1.126-3.828-2.701c-1.349-1.574-4.275-2.701-4.949-4.051-.677-1.352-1.577-1.801-2.702-1.801s-2.25,1.35-3.827,2.926-.898-.899-2.926-.225c-2.027.676-4.275-.226-5.402-1.126s-.899-2.25-2.699-1.575-2.926.225-2.251-1.125 .224-3.152.224-3.152 .677-2.251-.898-2.7-1.576-2.025-3.152-2.477-4.051-1.575-4.051-1.575-.225,0-.901-.225-.675-.226-2.476-.675-3.152-.002-4.051-1.126c-.902-1.125-.451-2.701-.451-2.701s3.601.45 0-2.251l-3.601-2.7s.448-.226.224-.676c-.227-.452 2.247,0 2.247,0z"
          fill="#b2b2b2"
        />
        <path
          d="m629.65 224.78s1.125 1.127 2.926 0.901 3.149 3.601 4.277 4.951c1.124 1.351 1.801 2.026 4.276 3.602 2.475 1.575 2.25-1.351 5.627 3.376s1.8 1.801 3.376 4.726c1.575 2.929 2.476 4.503 3.376 5.18s1.576 2.474 1.802 3.15c0.224 0.675 1.799 2.7 1.799 3.376s0.451 2.476-0.899 4.051-2.477 1.801-2.477 1.801-2.701-1.351-3.601-2.701-2.025-2.476-3.602-5.176-3.376-5.628-4.276-6.978-2.251-2.703-2.926-4.052-2.476-5.402-3.376-5.853-1.126-1.8-2.702-3.376c-1.574-1.576-1.35-2.926-2.025-3.826s-2.25-2.928-2.25-2.928l0.675-0.224z"
          fill="#b2b2b2"
        />
        <path
          d="m191.868,400.35c-1.576-.9-4.952-2.476-6.077-3.376s-4.501-5.854-4.501-5.854l-2.477-4.727c0,0-2.925-3.601-2.25-4.951 .675-1.351 2.026-2.251 2.026-2.926s1.35-2.477.224-3.151c-1.125-.676-1.125-.9-1.801-2.926-.675-2.025-.675-3.828-1.575-4.277s-1.576-3.376-2.476-3.601-1.801-1.801-1.801-1.801l-1.351-18.232c0,0-.451-8.327-.9-10.129s.675-5.626-.451-9.003 .226-7.427-.45-8.778 .45-5.176-.225-8.777 2.701-8.103 0-9.453-.675-3.377-2.926-3.377-3.826-1.126-5.852-2.7c-2.026-1.576-5.853-4.503-6.978-5.629-1.125-1.124-4.727-4.051-5.852-4.951s-2.251-4.727-3.151-5.853c-.9-1.124-1.35-4.5-2.701-6.526-1.351-2.025-3.151-5.401-3.602-6.077s-5.402-6.527-5.402-6.527l.45-3.601c0,0 3.376-2.026 2.926-2.701s.226-1.352-1.351-2.701-1.351-3.828 0-4.952c1.351-1.127 3.376-4.728 3.376-4.728l3.376-5.626c0,0 2.702-2.928 2.702-4.953s3.826-3.375 1.575-5.176-1.125-3.377-1.801-4.728-.225-2.25 1.801-3.601 5.627-6.302 5.627-6.302 2.701-.676 3.376-.676 1.801-7.204 3.827-2.477 2.701,2.251 2.026,5.627 .9,2.702 1.8,1.802-.451.675 1.35-3.378 1.126-5.401 2.251-4.275 1.575,1.351 3.601,2.026c2.025.675 2.701.449 3.375,1.8 .675,1.351.451-.45 4.277.226s9.228-1.351 8.553.899c-.675,2.251-2.026-.225 1.125,2.251s3.602,2.926 5.402,3.377 3.376.225 6.078,2.926 3.376,2.926 4.051,4.275 1.8.451 2.926,1.801 2.701,1.352 4.276,1.352c1.575,0 0-1.352 2.476.45s4.277,2.024 5.402,5.626 3.376,3.377 1.575,6.979-5.401,5.177-3.826,4.952c1.575-.226 4.502-1.577 5.402-1.351 .9.224 1.35-.675 2.701,0s1.576-.9 1.351.675-.226,0-.226,1.576-.45-1.576 2.251-.9 1.125-1.352 4.276,1.575 3.152,2.027 4.276,3.602c1.126,1.574 2.251-.899 2.927-.225s2.701.224 4.727.675 .675-1.35 3.827.675c3.15,2.025 6.302,1.35 6.977,3.151s2.477,1.125 3.376,2.251 1.35-.451 2.251,1.126c.9,1.574 3.602,1.124 3.151,2.699-.451,1.577.674.676.224,2.926s-2.026,5.854-3.375,6.753-1.35,2.026-2.251,3.151-.675-1.125-1.801,2.026-.9,3.602-1.8,6.527-.225,0-.9,2.926-.225,4.727-.9,8.104-.45,3.376-.9,5.852 1.125-1.124-.901,4.051c-2.025,5.178-2.25,4.951-2.925,7.203-.676,2.252.225.45-2.251,1.801s-1.125.9-4.052,1.801c-2.925.9-6.527,1.802-7.652,2.026s-5.627,1.575-4.276,4.275 1.351,3.152 0,6.529-3.376,4.502-3.376,6.076c0,1.575-.901,3.15-1.125,4.276-.226,1.126 2.025-1.126-.675,2.251s-2.926,2.476-3.827,4.502c-.9,2.025 0,.449-.9,2.025s-3.151,2.25-3.151,2.25 .224,1.126-.676.676-.675.225-4.052-.676-3.826-3.149-4.276-1.575c-.45,1.575.225,2.477 2.251,4.052 2.025,1.576 5.402,2.025 4.501,3.602s-.9,1.576-1.575,2.476c-.676.901.9.225-.676.901s-2.476,3.602-3.151,3.602c-.675,0-1.126,1.125-2.026.675s-3.15-2.026-3.601-1.126-1.351-1.126-1.126,2.025 .676,4.952-.45,5.628-3.827,0-3.827,0l-.45-1.126-1.575.45c0,0-.675,2.701.45,3.151s.9.899 2.025,2.25 .451,3.827.451,3.827 0,.676-1.125,1.801-1.576,2.026-1.801,2.701c-.226.675-1.576,3.602.45,3.376 2.025-.226 3.602-1.351 3.602,2.251s.9,2.702-.225,5.177c-1.126,2.476-2.026,2.701-2.251,4.951-.224,2.251.226,2.476.676,3.827s1.576.675.45,1.351c-1.123.675-4.499.001-4.499.001z"
          fill="#b2b2b2"
        />
        <path
          d="m133.796,217.132-1.575-2.25c0,0-.675-1.352-1.801-1.576s-3.602-3.151-3.602-3.151-1.125-.9-1.125-2.475-.901-4.051-.226-6.752 .901-6.077.676-6.978c-.226-.9 1.125-1.125-.45-2.026s-4.727-1.125-6.753-1.125c-2.025,0-4.502.676-4.952.9-.45.225 2.476-6.752 2.926-7.877s2.476-6.078 2.476-6.752c0-.676.675-.901-.675-1.8s-3.601-1.351-4.952-.676c-1.35.676-1.125-.9-2.25,1.8s-2.251,5.628-3.602,6.078-4.051,1.801-4.051,1.801-3.376-.225-4.502-.45-5.852-2.701-6.752-4.276c-.9-1.576-1.35-4.953-1.35-6.527 0-1.576 2.475-6.302 2.25-7.428s2.477-5.627 2.251-6.303 .45-2.926 1.125-3.826 4.052-2.026 4.952-2.926 2.476-2.025 4.051-2.476 2.927-.9 4.052-.9 4.051-2.476 4.501,0 2.477,1.575 3.602,1.8 1.351,1.351 3.151-1.575 3.601-3.827 3.601-3.152c0,.676 2.926-.224 3.376.451s1.351-.451 2.926.9 3.826,1.576 3.601,2.25c-.225.675.9.675.9,1.351s.901-1.576.901,2.475 1.125,6.528 1.125,6.528 1.575,3.377 2.25,2.701 2.025-2.475 2.025-2.475 2.251-1.351.676-6.078c-1.576-4.726-.45-6.077-.9-7.653s-.451-2.477 2.25-4.502 9.228-6.527 10.804-7.427 5.176-3.376 5.176-3.376 1.35-.675 1.576-2.476 4.501-4.952 4.727-5.852 3.152-3.15 3.152-3.15 3.15-1.802 2.925-2.926c-.225-1.125 4.052-3.15 4.727-3.15s4.277,1.124 4.277-.902c0-2.025 0-2.476 2.251-4.276s5.176-4.502 6.302-4.502 4.952-2.024 6.527-2.475 6.528-2.702 2.026,0-1.576,1.125-2.476,3.376-1.576,5.177 2.701,1.8 4.051-4.052 5.627-4.276c1.576-.225.45.675 3.826-.451s3.602-1.575 3.602-1.575 1.576-1.351.675-2.025c-.9-.676.901-1.576-2.476-.226s-3.151,1.576-5.402.9-5.627-.451-3.151-2.702 5.627-2.926 3.601-3.826c-2.025-.9-7.202.226-7.877.45-.676.225-2.251-.225-3.602,0s-.9-1.799 0-2.25 3.827-1.802 7.428-2.702 12.38-1.125 14.405-1.125 4.726.451 6.302-.675 4.727-2.925 5.177-3.827 2.251-2.25 2.251-2.25 2.025-2.026.9-2.926-2.251-2.926-3.151-2.476-.224,3.152-2.025.225c-1.801-2.925-1.576-3.376-2.476-4.051s-1.801-.226-1.125-3.376 .45-4.502.45-4.502 .675-2.7 0-2.925c-.676-.226-1.125-.9-2.25-.226-1.126.675-7.428,3.827-8.778,4.502-1.351.675-3.152-2.701-2.477-4.276 .676-1.577.225-.676-.675-2.926s-4.501-2.702-5.852-2.702-4.501-2.026-5.402-.675-5.626,5.626-6.528,6.077-2.25-3.826-2.925,3.151c-.676,6.979 2.476,9.004-1.125,9.454s-6.753,2.475-6.753,2.475-2.925.226-2.925,2.026-1.125,6.077-2.477,6.527-4.727-.224-5.852-1.575 .225-6.302.225-6.302l2.026-2.026c0,0-14.405-2.25-14.181-3.151 .226-.9-4.276-2.475-4.726-3.826s-.676-4.277-.225-5.402 6.527-6.527 9.678-7.652 8.553-3.601 10.129-4.052 4.276-.225 5.177-1.35 1.125-3.151 1.125-3.151-.45-3.152.45-2.702 2.476,1.126 2.701,1.801 .226,2.251 1.801.449 3.602-2.476 5.402-3.375 4.501-.675 6.078-1.575 4.276-1.801 4.501-4.052-.675-1.575-1.801-1.801c-1.125-.224.45.226-3.376,2.026s-2.701.45-5.402,1.8-2.927,1.576-3.151.451c-.226-1.126.45-2.926.45-2.926s.226-.226-1.35-.675-1.576.225-1.801-1.8c-.225-2.026 1.125-4.952-1.125-4.052s-4.276-.675-5.852,3.826-6.978,9.229-8.329,8.103-1.575-1.351-2.701-1.351-2.701-1.35-4.727-1.575-8.104-.225-9.678,0c-1.576.226-3.376-.9-4.728.451s-3.375,3.151-3.375,3.827-2.026-2.477-2.701-2.251-2.477-.9-4.501-.9c-2.026,0-3.377-1.126-4.051-1.126-.675,0 .674-1.801 0-2.026-.675-.224-15.307-.675-15.307-.675s-4.726-1.8-6.526-1.575-6.752.449-10.58,1.125-9.454,2.926-11.254,3.151c-1.801.226-5.852.226-6.527-.9-.676-1.125.225-.9-.676-1.125s-.224-.675-2.25-2.25 .901-2.926-3.151-2.926-6.527-.226-10.128,0-11.029,2.025-11.929,1.8c-.9-.225-8.103,1.126-9.229.451-1.125-.676-6.753,2.475-7.877,2.25-1.125-.225-5.402.226-6.527.901s-6.528,2.025-4.727,3.151 1.575,2.25 1.8,2.926-1.8,2.25-1.8,2.25-.451,0-2.926-.9-5.177-1.35-6.303-.675-3.151,2.027-2.701,2.927 3.601,2.926 4.052,2.25 1.576-2.025 2.926-1.8c1.351.226 3.377-.9 1.576,1.351s-3.377,3.376-4.502,3.602c-1.125.224-3.826.449-6.302.675s-2.252-.9-4.502,1.351-3.151.9-3.601,3.376-.9,2.475 0,3.151-1.801.9.225,1.575c2.025.676 4.501,1.351 4.276,2.025-.226.676 2.251-.899.9.9s-2.25,3.376.45,1.576 4.276-.451 6.527-1.576 4.502-1.35 5.852-2.25 2.026-2.25 4.052-2.927 .675.226.9,1.351c.225,1.125 0,1.35 1.351.449s1.35-.224 3.151-1.35 3.826-2.251 5.177-1.576c1.35.676 1.8.676 2.701.676s-1.125-.226.9,0c2.026.224-.9-.676 5.852.9s8.554.45 9.003,2.926 1.351-.226 2.476,1.35 1.801.226 2.476,2.926 0,10.129-.45,11.029-.675.9-.45,2.926c.225,2.025 2.926,11.705 2.026,12.379s-2.926.9-2.926.9l-1.125,4.051c0,0-1.8,3.376-3.376,5.177s-3.601,4.052-4.727,5.626c-1.125,1.576-2.026,4.278-3.601,5.853s-2.926.9-2.476,4.276 0,6.977.45,9.454 1.576,5.852 2.476,7.203 1.576,1.35 3.151,2.475c1.576,1.125 3.602,2.477 3.376,3.602s.225,8.104.225,8.104 1.351,2.25 1.575,4.726c.226,2.477 1.801,4.952 1.801,4.952l1.351,2.927c0,0 .675.226 1.576,2.025s.9,1.801 1.125,2.7c.226.902.226.676.226.902 0,.224-.226-3.827-.676-4.953s-.45-2.475-.9-3.826 .225-2.927-1.125-4.952-1.35-2.251-2.025-4.277c-.675-2.025-1.576-4.276-.675-4.727s1.575-3.375 3.376,0 2.026,2.477 2.251,5.178c.224,2.701.9,3.602 1.575,4.726 .675,1.125 2.25,4.953 3.151,6.527 .9,1.576 0-.9 2.025,2.251 2.026,3.151 2.252,3.826 3.377,6.302s1.801,2.476 2.476,4.276 .225,1.351-.226,3.376 .45,4.277.45,4.277 3.151,1.125 3.376,1.8 3.376,1.8 3.827,2.701 3.376,2.025 3.376,2.025 2.476,1.576 3.375,2.026 3.603.901 3.603.901 1.8.451 2.475.675c.675.225 2.701.225 2.701.225s1.801-1.35 2.476-.9 2.251-.901 2.926.224 2.026,1.126 2.701,2.027 1.35.9 2.476,2.025 2.251.9 3.376,1.8 2.025.9 3.376.9 1.35,0 2.251.226 1.35-.676 2.25.451 1.575,1.8 2.25,2.925c.675,1.125 2.251,1.125 2.476,2.926s.675,1.577.675,3.151c0,1.576.9,2.251 1.576,2.702 .674.449 3.15,2.699 3.15,2.699l3.376.676 2.701,2.026 2.929.897z"
          fill="#b2b2b2"
        />
        <path
          d="m205.935,8.03 13.505-1.688c0,0 4.726,0 7.09-1.688s0-1.688 7.09-3.038 5.065-2.026 8.779-1.351c3.713.676 4.726.676 8.778,1.351 4.051.675 5.064-.337 8.777.675s5.402.675 8.441.675h9.453c4.727,0 9.116-2.701 10.804-1.013s2.701,1.013 8.441,1.688 8.103-.676 10.466,0 6.416-.337 11.142,0 7.09-.337 8.778-.337 3.375-2.364 5.739-.338 5.402-.675 5.739,2.026 4.727.675.338,2.701-3.714,1.688-6.753,4.389 2.026,5.064-4.389,7.428-7.428-1.351-9.116,2.701 0,5.064-.337,7.09c-.338,2.025-1.013,2.363-3.039,4.051-2.025,1.688-2.025,0-6.752,1.013s-8.103,2.026-10.128,2.026-6.415,1.688-7.766,2.363 2.364,1.688-4.727,3.714-8.779,1.689-10.804,4.389-1.351,3.04-2.701,4.728-5.402,8.441-7.428,6.753c-2.025-1.688-3.039-1.351-4.727-3.039s-2.701-4.051-3.714-5.402-1.351-4.727-1.688-6.753-3.377-6.752 0-6.077c3.376.675 5.402.338 6.415-.337s2.026-3.039 2.026-3.039-.337-3.714-1.351-5.74-.337-3.714-2.025-5.739c-1.688-2.026-1.688-1.688-4.052-3.714s-1.688-3.039-5.402-3.376-4.727-1.351-6.078-1.013-5.739-2.364-1.013-2.701 9.116.337 9.116.337 6.077-2.701 4.052-3.038c-2.025-.338 3.038-3.377-1.688-2.364s-10.128,2.364-11.479,2.701-4.727.675-8.103,1.688-7.428.676-9.453,3.039c-2.026,2.363 0,2.701-2.026,2.363-2.025-.337 1.688-2.363-3.038,0s-3.376,2.026-5.739,1.351c-2.364-.675-4.052-1.688-4.052-1.688s3.04-.338-1.35-.675-4.389-.337-6.077-2.364-.675-2.026.337-2.701 1.689-2.027 1.689-2.027z"
          fill="#b2b2b2"
        />
        <path
          d="m198.507,23.223c-1.688,1.688-5.74,4.052-4.726,5.065s1.688,4.727 3.714,3.714c2.025-1.013-.338-4.389 7.427-1.688 7.766,2.701 7.09-.337 8.778,3.714s3.038,7.089 2.025,8.103-1.35,2.026-4.727,3.039-4.727,2.364-2.363,4.051 6.753,3.376 8.778,4.39 8.103,1.351 5.064-2.025 .675-4.39.675-4.39 5.74,4.39 3.715-.675-3.377-5.064-2.026-5.064 4.051,1.688 4.051,1.688l1.351-2.701-1.351-4.389-4.389-4.389c0,0 3.713-3.376-1.351-4.051s-4.727-.675-7.428-2.364-3.038-2.363-8.103-1.35-6.752,1.688-6.752,1.688l-2.362-2.366z"
          fill="#b2b2b2"
        />
        <path
          d="m123.218,27.275c2.026-2.026 7.428-6.752 9.454-5.402 2.025,1.35 5.063-1.013 7.427,1.013s5.064,4.389 7.09,5.064c2.026.675 4.389-1.688 6.415-.675 2.025,1.013 9.115-5.064 7.765-.337s1.688,6.077-2.026,6.415-7.765,3.039-9.454,2.026-3.039-2.026-5.74-.675-1.35,1.35-4.389.675-3.713.675-4.388-.338c-.676-1.012-2.701-.675-2.364-3.714s1.35-2.701-.676-2.701c-2.025,0-3.713.338-5.064-.675s-4.05-.676-4.05-.676z"
          fill="#b2b2b2"
        />
      </svg>
    </div>
  );
};

export default RegionData;
