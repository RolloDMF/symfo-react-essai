<?php

namespace App\Controller;

use App\Entity\Data;
use App\Form\DataType;
use App\Repository\DataRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/data")
 */
class DataController extends Controller
{
    /**
     * @Route("/entity1", name="entity1", methods="GET")
     */
    public function entity1(DataRepository $dataRepository, SerializerInterface $serializer)
    {
        $data = $dataRepository->findAll();
        $json = $serializer->serialize($data, 'json');
        return new Response($json);
    }

    /**
     * @Route("/entity2", name="entity2", methods="GET")
     */
    public function entity2(DataRepository $dataRepository)
    {
       
    }
}
