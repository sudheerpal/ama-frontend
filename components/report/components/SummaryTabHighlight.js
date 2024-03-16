import React from "react";
import { Search } from "react-feather";

const SummaryTabHighlight = () => {
  return (
    <div>
      <header className="my-4">
        <h3 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
          DIGITAL HEALTH MARKET REPORT HIGHLIGHTS
        </h3>
      </header>
      <main>
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* head */}
            <thead className="text-base text-white bg-primary">
              <tr className="flex items-center">
                <th className="w-1/2 py-2">Aspects</th>
                <th className="w-1/2 py-2">Details</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200">
              {"1234".split("").map((el) => (
                <>
                  <tr className="flex items-center">
                    <td className="flex items-center w-1/2 gap-2 p-4">
                      <Search className="text-primary" />{" "}
                      <span className="font-bold uppercase text-primary">
                        By product and services
                      </span>
                    </td>
                    <td className="w-1/2 p-4">
                      <ul className="list-disc">
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Aliquid doloribus dolorum consequuntur.</li>
                        <li>Asperiores aut alias reprehenderit.</li>
                        <li>Assumenda exercitationem nostrum natus.</li>
                        <li>Vero explicabo dignissimos nisi.</li>
                        <li>Laboriosam temporibus velit eligendi?</li>
                        <li>Necessitatibus nisi dignissimos amet?</li>
                        <li>Nostrum obcaecati eius voluptatem.</li>
                        <li>Aliquid magnam consequuntur laborum?</li>
                        <li>Libero suscipit provident nam!</li>
                        <li>Maxime voluptatem sit id.</li>
                        <li>Quisquam optio rem temporibus!</li>
                        <li>Illum quis repellendus quod!</li>
                        <li>Consectetur vitae dignissimos repellat.</li>
                      </ul>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default SummaryTabHighlight;
